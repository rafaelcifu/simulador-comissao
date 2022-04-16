import "./styles.css";

export default function CounterResult(props) {
  const getNumber = props.getNumber;

  function comissionResult() {
    return getNumber * 112.50;
  }

  console.log(comissionResult());

  return (
    <div className="container-counter-result">
      <div className="counter-result">
        <h1 className="title">
          Você pode ganhar até R$ {comissionResult()} por mês.
        </h1>
      </div>
      <p className="label-text">Simule a quantidade de indicações:</p>
    </div>
  );
}
