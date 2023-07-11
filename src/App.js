import { useState } from 'react';
import './App.css';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';

function App() {

const [diarios, setDiarios] = useState([])

const paises = [
  {
    nome: "Argentina",
    imagem: "../public/imagens/argentina.png"
  }  ,
  {
    nome: "Chile",
    imagem: "../public/imagens/chile.png"
  },
  {
    nome: "EUA",
    imagem: "../public/imagens/eua.png"
  },
  {
    nome: "Canadá",
    imagem: "../public/imagens/canada.png"
  },
  {
    nome: "Portugal",
    imagem: "../public/imagens/portugal.png"
  },
  {
    nome: "Inglaterra",
    imagem: "../public/imagens/inglaterra.png"
  },
  {
    nome: "França",
    imagem: "../public/imagens/frança.png"
  },
  {
    nome: "Holanda",
    imagem: "../public/imagens/holanda.png"
  },
  {
    nome: "Alemanha",
    imagem: "../public/imagens/alemanha.png"
  }
]

const aoNovoDiarioAdicionado = (diario) => {
  console.log(diario)
  setDiarios([...diarios, diario])
}

  return (
    <div className="App">
        <Banner/>
        <Formulario aoNovoDiarioCadastrado = {diario => aoNovoDiarioAdicionado(diario)} 
        itens={ paises }/>
    </div>
  );
}

export default App;
