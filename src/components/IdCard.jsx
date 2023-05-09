function IdCard(props) {
  console.log(props);
  return (
    <div>
      <img src={props.card.picture} alt="pic" />
      <p>lastName: {props.card.lastName}</p>
      <p>firstName: {props.card.firstName}</p>
      <p>gender: {props.card.gender}</p>
      <p>height: {props.card.height}</p>
      <p>birth: {props.card.birth}</p>
    </div>
  );
}

export default IdCard;
