import BirdSpotted from "./components/BirdSpotted";

function App() {
  const bird = [
    {
      id: "b1",
      title: "Robin",
      number: 3,
      date: new Date(2021, 0, 1),
    },
    {
      id: "b2",
      title: "Blackbird",
      number: 2,
      date: new Date(2021, 0, 2),
    },
    {
      id: "b3",
      title: "Redwing",
      number: 4,
      date: new Date(2021, 0, 7),
    },
    {
      id: "b4",
      title: "Coal Tit",
      number: 6,
      date: new Date(2021, 0, 7),
    },
  ];

  return (
    <div>
      <h2>What birds have we seen?</h2>
      <BirdSpotted
        title={bird[0].title}
        number={bird[0].number}
        date={bird[0].date}
      />
      <BirdSpotted
        title={bird[1].title}
        number={bird[1].number}
        date={bird[1].date}
      />
      <BirdSpotted
        title={bird[2].title}
        number={bird[2].number}
        date={bird[2].date}
      />
      <BirdSpotted
        title={bird[3].title}
        number={bird[3].number}
        date={bird[3].date}
      />
    </div>
  );
}

export default App;
