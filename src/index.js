import React from "react";
import ReactDOM from "react-dom/client";
import { Noticia } from "./components//noticia";

function botonClick(){
    console.log("Click en el boton");
}

function leerNombre(e){
    console.log(e.target.value);
}

function leerTelefono(e){
    console.log(e.target.value);
}

function leerGrupo(e){
    console.log(e.target.value);
}

function leerSexo(e){
    console.log(e.target.value);
}

function enviarFormulario(e){
    e.preventDefault();
    var grupo=document.getElementById("grupo");
    console.log(grupo.value);
    var sexo=document.getElementById("sexo");
    console.log(sexo.value);
    console.log("Formulario enviado");
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<>
<Noticia/>
<center>
<br/>
<h3>Nombre:</h3>
<input id="nombre" type="text" onChange={leerNombre}/>
<br/>
<br/>
<h3>Telefono:</h3>
<input id="telefono" type="number" onChange={leerTelefono}/>
<br/>
<br/>
<button onClick={botonClick}>Guardar</button>
<br/>
<br/>
<br/>


<form onSubmit={enviarFormulario}>
<h3>Grupo:</h3>
  <label>
    <input type="radio" name="grupo" value="TI01SM-22" onChange={leerGrupo}/>
    TI01SM-22
  </label>
  <br/>
  <label>
    <input type="radio" name="grupo" value="TI02SM-22" onChange={leerGrupo}/>
    TI02SM-22
  </label>
  <br/>
  <label>
    <input type="radio" name="grupo" value="TI03SM-22" onChange={leerGrupo}/>
    TI03SM-22
  </label>
  <br/>
  <br/>
  <h3>Sexo:</h3>
  <label>
    <input type="checkbox" name="Femenino" value="Femenino" onChange={leerSexo}/>
    Femenino
  </label>
  <br/>
  <label>
    <input type="checkbox" name="Masculino" value="Masculino" onChange={leerSexo}/>
    Masculino
  </label>
  <br/>
  <br/>
</form>
</center>
</>
);