import BirdDate from "./BirdDate";
import "./BirdSpotted.css";

function BirdSpotted(props) {
  return (
    <div className="bird-type">
      <BirdDate date={props.date} />
      <div className="bird-type__description">
        <h2>{props.title}</h2>
        <div className="bird-type__quantity">{props.number}</div>
      </div>
    </div>
  );
}

export default BirdSpotted;
