import React, {useEffect, useState } from "react";
import './App.css';
import api from "./componetes/api"
function App() {
  document.title="consumindo api"
  const [usuario,setUsuario]=useState();

  useEffect(()=>{
    api.get("MarceloSilva05")
    .then((response) => setUsuario(response.data))
    .catch((err) =>{
      console.error("erro"+err);
    });
  },[])
  return (
    <div className="conteudo">
            <img src={usuario?.avatar_url}/>
            <h1>{usuario?.name}</h1>
            <p>{usuario?.login}</p>
            <p>{usuario?.bio}</p>
            <p>Repositorios {usuario?.public_repos}</p>
           
    </div>
  );
}

export default App;
