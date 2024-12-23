function Button({ text, color = 'black', children }) {
  return (
    <button style={{ color: color }}>
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
