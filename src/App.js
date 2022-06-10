import { useEffect, useState } from 'react';
import './App.css'
import Prato from './componentes/Pratos';

function App() {

  const [pratos, setPratos] = useState([])

  useEffect(() => {
    fetch('https://pizza-santos.herokuapp.com/api/pratos/')
      .then(resp => resp.json())
      .then(dados => {
        setPratos(dados)
      })
  }, [])


  return (
    <div className="App">
      <div className='banner-container'>
        <img src='./imagens/banner.png' alt='Banner pizza santos'/>
      </div>
      <div className='logo-container'>
        <img src='./imagens/logo.png' alt='Logo pizza Santos' />
      </div>

      <section className='cardapio'>
        {pratos.map(prato => 
          (<Prato 
            key={prato.id}
            nome={prato.nome}
            descricao={prato.descricao}
            imagem={prato.image}
            preco={prato.preco}
          />))}
      </section>

    </div>
  );
}

export default App;
