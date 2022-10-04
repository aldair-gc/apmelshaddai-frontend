import { MouseEventHandler } from "react";
import { Container } from "./style";

interface ConfirmAction { id: number, text: string, action: MouseEventHandler }

export default function ConfirmAction(props: ConfirmAction) {
  return (
    <Container id={"confirm-action-id-" + props.id}>
      {props.text}
      <div className="options">
        <button className="font-red" onClick={props.action}>Confirm</button>
        <button onClick={() => (document.querySelector("#confirm-action-id-" + props.id) as HTMLDivElement).style.display = "none"}>Cancel</button>
      </div>
    </Container>
  )
}
