import "./Styles.css";

function FruitList({ parameter }) {
  return (
    <>
      <ul className="lista-ul">
        {parameter.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default FruitList;
