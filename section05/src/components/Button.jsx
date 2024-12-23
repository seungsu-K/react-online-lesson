function Button({ text, color = 'black', children }) {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={() => {
      //   console.log(text);
      // }}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}

export default Button;

// function Button(props) {
//   console.log(props);

//   return <button>{props.text}</button>;
// }

// export default Button;
