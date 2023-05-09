import IdCard from "./components/idCard";
import "./App.css";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

const cardDetails = [
  {
    lastName: "Doe",
    firstName: "John",
    gender: "male",
    height: 178,
    birth: "1992-07-14",
    picture: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <IdCard card={cardDetails[0]} />
      <Greetings lang="de"> Ludwig</Greetings>
      <Greetings lang="fr"> François</Greetings>
      <Random min={1} max={100} />
      <Random min={1} max={6} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
