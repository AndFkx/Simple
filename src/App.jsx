import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const responder = () => {
    let r = "No entendí 😅";
    if (input.toLowerCase().includes("hola")) r = "¡Hola! 👋";
    if (input.toLowerCase().includes("como estas")) r = "Estoy bien, gracias 😊 ¿y tú?";
    if (input.toLowerCase().includes("adios")) r = "¡Hasta luego! 👋";
    if (input.toLowerCase().includes("que haces")) r = "Estoy aquí esperando tus mensajes 😎";
    if (input.toLowerCase().includes("te quiero")) r = "Aww, ¡yo también te quiero! ❤️";
    if (input.toLowerCase().includes("triste")) r = "demalas, ¡por perro! ";
    if (input.toLowerCase().includes("bien")) r = "siga asi rata imunda ";
    setRespuesta(r);
    setInput("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        fontFamily: "Arial, sans-serif",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          marginBottom: "20px",
          textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        Mini Chat 🤖
      </h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && responder()}
        placeholder="Escribe algo..."
        style={{
          padding: "12px",
          borderRadius: "12px",
          border: "none",
          outline: "none",
          marginBottom: "12px",
          width: "280px",
          fontSize: "1rem",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      />

      <button
        onClick={responder}
        style={{
          padding: "12px 24px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          background: "#fff",
          color: "#764ba2",
          fontWeight: "bold",
          fontSize: "1rem",
          transition: "0.3s",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
        onMouseOver={(e) => (e.target.style.background = "#f3f3f3")}
        onMouseOut={(e) => (e.target.style.background = "#fff")}
      >
        Enviar
      </button>

      <p
        style={{
          marginTop: "25px",
          fontSize: "1.4rem",
          minHeight: "40px",
          background: "rgba(255,255,255,0.2)",
          padding: "12px 20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        {respuesta}
      </p>
    </div>
  );
}

export default App;
