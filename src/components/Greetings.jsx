function Greetings(props) {
  let greeting = "";
  props.lang === "es"
    ? (greeting = "Hola")
    : props.lang === "de"
    ? (greeting = "Hallo")
    : props.lang === "en"
    ? (greeting = "Hello")
    : props.lang === "fe"
    ? (greeting = "Bonjour")
    : (greeting = "Invalid Language");

  return (
    <div>
      <span>{greeting}</span>
      <span>{props.children}</span>
    </div>
  );
}

export default Greetings;
