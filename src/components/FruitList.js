import "./Styles.css";

function FruitList(props) {
  return (
    <>
      <ul className="lista-ul">
        {props.parameter.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default FruitList;
