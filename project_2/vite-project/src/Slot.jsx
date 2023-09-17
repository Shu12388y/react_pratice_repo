import "./Slot.css";
function Slot(props) {
  const winner = props.value1 === props.value2 && props.value1 === props.value3;
  if (winner)
    return (
      <>
        <div className="flex">
          <div>{props.value1}</div>
          <div>{props.value2}</div>
          <div>{props.value3}</div>
        </div>

        <div>You Win</div>
      </>
    );
  else
    return (
      <>
      <div className="flex">
          <div>{props.value1}</div>
          <div>{props.value2}</div>
          <div>{props.value3}</div>
        </div>
        <div>You lose</div>
      </>
    );
}

export default Slot;
