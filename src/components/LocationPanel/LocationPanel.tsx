import { render } from '@testing-library/react';

import React, { useEffect, useRef, useCallback, MouseEventHandler } from 'react';

import styled from "styled-components"
import { useConferenceStore } from '../../store/ConferenceStore';
import { useLocalStore } from '../../store/LocalStore';
import { panOptions } from '../PanWrapper/panOptions';

const InfoPanelWrapper = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	text-align: initial;
`



const InfoPanel = () => {
	const { pos, user } = useLocalStore()
	return (
		<>
		  <div>{useConferenceStore().displayName || 'me'} ({Math.round(pos.x)}, {Math.round(pos.y)})</div>
	{ Object.entries(useConferenceStore().users).map(user => {
		      		return(
				  <div key={user[0]} style={ (user[1].chatmoClient || user[1].linkMain) ? {} : {color:'#ff0000'} }>{user[1].user?._displayName || user[0]} ({Math.round(user[1].pos.x)}, {Math.round(user[1].pos.y)}) {user[0]}/{user[1].linkMain}</div>
			 )
		   	 })}
		</>)
}

const canvasWidth = 200;
const canvasHeight = 200;

const MiniMap = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const ls = useLocalStore();
	const cs = useConferenceStore();

	const fnv32a = (str: String): number => {
		var FNV1_32A_INIT = 0x811c9dc5;
		var hval = FNV1_32A_INIT;
		for ( var i = 0; i < str.length; ++i )
		{
			hval ^= str.charCodeAt(i);
			hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
			hval &= 0xffffffff;
		}
		return hval >>> 0;
	}

    useEffect( () => {
        const canvasObj = canvasRef.current;
		if(!canvasObj)
			return;
		const ctx = canvasObj?.getContext('2d');
		if(!ctx)
			return;
		ctx.clearRect( 0,0, canvasWidth, canvasHeight );
		ctx.strokeStyle = 'black';
		ctx.strokeRect( 0,0, canvasWidth, canvasHeight );

		const roomSize = panOptions.room.size;
		const radius = 5;
		const drawPos = (pos, color, radius, ellipse) => {
			ctx.fillStyle = color;
			const px = pos.x / roomSize.x * canvasWidth;
			const py = pos.y / roomSize.y * canvasHeight;
			if(ellipse) {
				ctx.beginPath();
				ctx.ellipse(px, py, radius, radius, 0, 0, 2*Math.PI);
				ctx.fill();
			} else {
				ctx.fillRect(px-radius/2, py-radius/2, radius, radius);
			}
		};

		drawPos(ls.pos, '#f4aa41', 2*radius, true);
		Object.entries(cs.users).forEach(entry => drawPos(entry[1].pos, '#' + (fnv32a(entry[0]) >>> 8).toString(16), radius, false));
    });

	const clickHandler = (event) => {
		const canvasObj = canvasRef.current;
		if(!canvasObj)
			return;
		const rect = canvasObj.getBoundingClientRect()
		const x = event.clientX - rect.left
		const y = event.clientY - rect.top
		console.log(x, y)
	};

	return( <canvas className="minimap-canvas" ref={canvasRef} width={canvasWidth} height={canvasHeight} onClick={clickHandler}/>)
}

export const LocationPanel = () => {
	const conferenceStore = useConferenceStore();
	const localStore = useLocalStore();
	  const onInputChange = (e) =>{
		localStore.setLocalText(e.target.value)
	}

	const onkeydown = (e) => {
		if (e.keyCode == 13){
			conferenceStore.sendTextMessage(localStore.text)
			localStore.setLocalText('')
		}
	}



	return (
		    <InfoPanelWrapper>
				<input type="text" placeholder='Enter Text to Chat' onChange={onInputChange} onKeyDown={onkeydown}  value={localStore.text} />
	  			<ChatMessagePanel />
			    <InfoPanel/>
				<MiniMap/>
			</InfoPanelWrapper>
               )
}


const ChatMessagePanel = () => {
	const conferenceStore = useConferenceStore();
	// Object.entries(useConferenceStore().users)
	const userMap = new Map<string,string>();
	console.log(conferenceStore.users)
	Object.entries(conferenceStore.users).map(user => {userMap.set(user[0],user[1].user._displayName)})
	console.log(userMap)
	return (
		<>
		  <div style={{border:"solid",borderRadius:'5px',backgroundColor:'white', height:'200px', overflow:'auto', maxWidth:'350px'}  } >
	{ conferenceStore.messages.map(messageObj => {
		      		return(
				  <div>{messageObj.time.getHours().toString().padStart(2,'0')}:
				  {messageObj.time.getMinutes().toString().padStart(2,'0')}:
				  { messageObj.time.getSeconds().toString().padStart(2,'0')}
				  {userMap.has(messageObj.user)?userMap.get(messageObj.user):messageObj.user}:
				  
				  
				  {validURL(messageObj.message)?LinkMessage(messageObj.message):messageObj.message}</div>
			 )
		   	 })}</div>
		</>)
}
function validURL(str) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
	  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
	  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
	  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return !!pattern.test(str);
  }
  

const LinkMessage = (message: string) => {
	return (<a target="_blank" href={message}>{message}</a>);
}