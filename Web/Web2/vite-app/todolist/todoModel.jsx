import React, { useState } from "react";

const TodoModel = () => {
  const modelliPerMarca = {
    bmw: ["Serie 1", "Serie 2", "Serie 3", "Serie 4", "Serie 5", "Serie 6", "Serie 7", "Serie M" ,"X1", "X2", "X3", "X4", "X5", "X6", "X7"],
    mercedes: ["Classe A", "Classe B", "Classe C", "Classe E", "Classe S", "GLA", "GLB", "GLE", "GLS"],
    audi: ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8"],
  };

  const [marca, setMarca] = useState("");
  const [modelli, setModelli] = useState([]);

  const cambioMarca = (e) => {
    const selectedMarca = e.target.value;
    setMarca(selectedMarca);
    setModelli(modelliPerMarca[selectedMarca] || []);
  };

  return (
    <div className="p-3">

      <select id="marca" className="form-select mb-3" onChange={cambioMarca} value={marca}>
        
        <option value="">Seleziona marca</option>
        <option value="bmw">BMW</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
        {marca}
        <select id="modello" className="form-select" disabled={!marca} value={modelli}>
            <option value="">Seleziona modello</option>
            {modelli.map((m, index) => (
            <option key={index} value={m}>{m}</option>
            ))}
        </select>
        {modelli}
    </div>
  );
};

export default TodoModel;
