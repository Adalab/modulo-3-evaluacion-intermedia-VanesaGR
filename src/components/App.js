import '../styles/App.scss';
import data from '../data/data .json' //para llamar a los datos
import {useState} from 'react';

function App() {
// Declaración de variables de estado
  const [search, setSearch]=useState('');
  const [select, setSelect]=useState('');

  const renderList = ()=>{
    return data
    .filter((eachCharacter)=>{//filtrar por frase total o parcial
      return eachCharacter.quote.toLowerCase().includes(search.toLowerCase())
    })
    .filter((eachCharacter)=>{ //filtrar por el select de personaje
      return eachCharacter.character.toLowerCase().includes(select);
    })
    .map((eachCharacter,i) => (
      <li key={i}>
        <p>{eachCharacter.quote}</p>
        <p>{eachCharacter.character}</p>
      </li>
    ))
     
  }

  const handleFilterInput=(ev) =>{
    setSearch(ev.target.value);
  }

  const handleFilterCharacter=(ev) =>{
    setSelect(ev.target.value);
      // .filter((eachCharacter)=>eachCharacter.character===select);
      // .filter(eachCharacter=>(filter)==='all')?true: eachCharacter.character===filter;
  }
  

  const handleSubmit = (ev)=>{
    ev.preventDefault();
  }


  return (
    <div className="container">
      <header className='header'>
        <h1 className='header-title'>Frases de Friends</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='searchQuote'>Buscar frase</label>
          <input
            className='searchQuote-input'
            type='search'
            name='searchQuote'
            placeholder='Introduce una frase'
            onChange={handleFilterInput} //cuando se introduce una palabra, filtra por ahi
            // value={}
          />
          <label htmlFor='searchCharacter'>Personaje</label>
          <select
            name='searchCharacter'
            id='searchCharacter'
            onChange={handleFilterCharacter} //cuando cambia, filtra por personaje
            // value={}
          >
            <option value='todos'>--Escoge el personaje--</option>
            <option value='Rachel'>Rachel</option>
            <option value='Chandler'>Chandler</option>
            <option value='Ross'>Ross</option>
            <option value='Monica'>Monica</option>
            <option value='Phoebe'>Phoebe</option>
            <option value='Joey'>Joey</option>            
          </select>
        </form>
        <span className="mnsj"></span>
      </header>

     <ul>{renderList()}</ul>

      <main className='main'>
        <form>
          <label htmlFor='quote'>¿Alguna otra?</label>
          <input
            className='quote-input'
            type='text'
            name='quote'
            id='quote'
            placeholder='Añade frase'
            // onChange={}
            // value={}
          />
          <label htmlFor='character'>¿Quién dijo eso?</label>
          <input
            className='character-input'
            type='text'
            name='character'
            id='character'
            placeholder='Añade personaje'
            // onChange={}
            // value={}
          />
          <input
            className='addBtn'
            type='submit'
            value='Añade nueva frase'
            // onClick={}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
