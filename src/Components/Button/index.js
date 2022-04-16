import "./styles.css";

export default function Button(props) {
  const children = props.children;
  const changeNumberProps = props.changeNumberProps;

  return (
    <div className="button-container">
      <button class="button" onClick={changeNumberProps}>
           {children}
      </button>
    </div>
  );
}
