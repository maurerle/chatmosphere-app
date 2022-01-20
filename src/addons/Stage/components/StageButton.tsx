import { MdPresentToAll } from "react-icons/md"
import { Button } from "../../../components/common/Buttons/Button"
import { useConferenceStore } from "../../../store/ConferenceStore"
import { useLocalStore } from "../../../store/LocalStore"
import { useEffect } from "react"

export const StageButton = ({callback=()=>null}) => {

	// const onStage = useStageStore(store => store.stageVisible)
	// const setVisible = useStageStore(store => store.setVisible)
	// const [onStage, setOnStage] = useState(false)
	const conference = useConferenceStore(store => store.conferenceObject)
	const onStage = useLocalStore(store => store.onStage)
	const setOnStage = useLocalStore(store => store.setOnStage)

	const onClick = () => {
		const tmpStage = !onStage
		setOnStage(tmpStage)
		conference?.setLocalParticipantProperty('onStage', tmpStage)
	}

	useEffect(()=>{
		return(() => {
			setOnStage(false)
		})
	},[setOnStage])

	return (
		<Button onClick={onClick}>
			<MdPresentToAll />
			Stage
		</Button>
	)

}