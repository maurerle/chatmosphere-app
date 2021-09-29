import React from 'react'
import { ErrorHandler } from '../../components/common/Info/ErrorHandler'
import { Info } from '../../components/common/Info/Info'
import { Footer } from '../../components/Footer/Footer'
import { JoinButton } from '../../components/Footer/JoinButton/JoinButton'
import { MuteButton } from '../../components/Footer/MuteButton/MuteButton'
import { Header } from '../../components/Header/Header'
import JitsiConnection from '../../components/JitsiConnection/JitsiConnection'
import { Localuser } from '../../components/Localuser/Localuser'
import { UserDragContainer } from '../../components/Localuser/LocalUserContainer'
import { PanWrapper } from '../../components/PanWrapper/PanWrapper'
import { Room } from '../../components/Room/Room'
import { Users } from '../../components/User/Users'
import { LocationPanel } from '../../components/LocationPanel/LocationPanel'
import { ScreenSharing } from '../../components/Footer/ScreenSharing/ScreenSharing'
import { LocalStoreLogic } from '../../store/LocalStoreLogic'
import { useConferenceStore } from '../../store/ConferenceStore'
import { useParams, useHistory } from 'react-router-dom'
import { ChatPanel } from '../../components/ChatMessagePanel/ChatPanel'
import { SettingsButton } from "../../components/Footer/SettingsButton/SettingsButton"

const Debug = () => {

	const conferenceStore = useConferenceStore();
	const history = useHistory()
	const {id} = useParams()
	React.useEffect(
		() => {
			console.log()
			if (/sphere/i.test(conferenceStore.displayName)){
				
				history.push(`/enter/${id}`)
			}
			
			
		}
		,[]
	)
	return (<></>)
} 


export const Session = () => {
		return (
		<React.Fragment>
			<ErrorHandler />
			<Info>
				Welcome
			</Info>
			<Header>Chatmosphere</Header>
			<JitsiConnection />
			<LocalStoreLogic />
			<PanWrapper>
				<Room>
					<Users />
					<UserDragContainer>
						<Localuser audioRadius />
					</UserDragContainer>
				</Room>
			</PanWrapper>
			<Footer>
				<ScreenSharing />
				<JoinButton joined={true} />
				<MuteButton />
				<SettingsButton />
			</Footer>
			<ChatPanel />
			<LocationPanel/>
			<Debug></Debug>
		</React.Fragment>
	)
}
