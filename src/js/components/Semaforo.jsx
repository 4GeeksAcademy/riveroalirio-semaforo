import { useState } from "react";
import Luz from "./Luz";

const Semaforo = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showPurple, setShowPurple] = useState(false);

  const toggleColor = () => {
    const colors = showPurple ? ["red", "yellow", "green", "purple"] : ["red", "yellow", "green"];
    const currentIndex = colors.indexOf(selectedColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setSelectedColor(colors[nextIndex]);
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh",
      flexDirection: "column"
    }}>
      <div style={{ display: "inline-block" }}>
        
        <div style={{
          width: "30px",
          height: "120px",
          backgroundColor: "black",
          margin: "0 auto",
          borderRadius: "5px 5px 0 0"
        }} />

        
        <div style={{
          width: "150px",
          backgroundColor: "black",
          borderRadius: "20px",
          padding: "20px",
        }}>
        
        
          <Luz
            color="red"
            isSelected={selectedColor === "red"}
            onClick={() => setSelectedColor("red")}
            className="luz-roja"
          />

        
          <Luz
            color="yellow"
            isSelected={selectedColor === "yellow"}
            onClick={() => setSelectedColor("yellow")}
            className="luz-amarilla"
          />

        
          <Luz
            color="green"
            isSelected={selectedColor === "green"}
            onClick={() => setSelectedColor("green")}
            className="luz-verde"
          />

        
          {showPurple ? (
            <Luz
              color="purple"
              isSelected={selectedColor === "purple"}
              onClick={() => setSelectedColor("purple")}
              className="luz-purpura"
            />
          ) : null}
        </div>
      </div>

    
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={toggleColor}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "#296bd6",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Alternar Color
        </button>

        <button
          onClick={() => setShowPurple(!showPurple)}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "#9C27B0",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          {showPurple ? "Quitar Púrpura" : "Añadir Púrpura"}
        </button>
      </div>
    </div>
  );
};

export default Semaforo;