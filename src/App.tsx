import { useState } from 'react';
import './App.css';

import logoImg from './assets/logo.png'

function App() {
  const[textoFrase, setTextoFrase] = useState("");
  const[categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Acredite no processo.",
        "Você é mais capaz do que imagina.",
        "Erros são lições disfarçadas.",
        "Um passo de cada vez.",
        "Foque no que importa.",
        "Respira, vai dar certo.",
        "Confie no seu esforço.",
        "Grandes mudanças começam pequenas.",
        "Seja constante, não perfeito."
      ]
    },
    {
      id: 2,
      nome: "Bem estar",
      frases: [
        "Seu corpo ouve tudo o que sua mente diz.",
        "Descansar também é produtividade.",
        "Respire fundo e se dê um tempo.",
        "Cuidar de você não é egoísmo, é necessidade.",
        "Você merece paz, não apenas pausas.",
        "Ouça seu corpo, respeite seu ritmo.",
        "Menos cobrança, mais compaixão.",
        "Tudo bem não estar bem o tempo todo.",
        "A calma é uma força silenciosa.",
        "Alimente sua mente com coisas boas."
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  };

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math. random() * allFrases[categoriaSelecionada].frases.length);
    setTextoFrase(`" ${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)  //Apenas para toda frase ter aspas
  };

  return (
    <div className='container'>
      <img 
        src={logoImg}
        alt="Logo frases"
        className='logo'
        />

        <h2 className='title'>Categorias</h2>
        <section className='category-area'>
          {allFrases.map((item, index) => (
            <button
            key={item.id}
            className='category-button'
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}

            onClick={() => handleSwitchCategory(index)}
            >
              {item.nome}
            </button>
          ))}
        </section>

        <button className='button-frase' onClick={gerarFrase}>Gerar frase</button>

        {textoFrase !== '' && <p className='texto-frase'>{textoFrase}</p>}

    </div>
  );
};

export default App
