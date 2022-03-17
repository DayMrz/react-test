export function Button({ children, type = "submit", onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#33f",
        border: "0",
        borderBottom: "5px solid black",
        borderRight: "5px solid black",
        color: "white",
        fontWeight: "bold",
        padding: ".5em 1em",
      }}
      type={type}
    >
      {children}
    </button>
  );
}
