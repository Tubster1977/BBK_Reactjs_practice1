import "./BirdDate.css";

function BirdDate(props) {
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="bird-date">
      <div className="bird-date__day">{day}</div>
      <div className="bird-date__month">{month}</div>
      <div className="bird-date__year">{year}</div>
    </div>
  );
}

export default BirdDate;
