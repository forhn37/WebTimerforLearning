import Timecomponent from "./ui/timecomponent";
import Timercontrolbutton from "./ui/timercontrolbutton";
import Board from "./ui/board";
import Textinput from "./ui/textinput";
import Submitbutton from "./ui/submitbutton";
export default function StopWatchHome() {
  const array =[
    {todo : 'javascript'}
  ]

  return (
    <div className="w-full h-full">
      <div className="flex justify-around items-center outline">
        <div>
          <Timecomponent />
        </div>
        <div>
          <Timercontrolbutton />
          <Timercontrolbutton />
          <Timercontrolbutton />
        </div>
      </div>
      <div>
        <Board contents={array}/>
      </div>
      <div>
        <Textinput />
        <Submitbutton />
      </div>
    </div>
  )
}