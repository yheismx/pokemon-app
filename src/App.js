import {useState, useEffect} from 'react';
import './App.css';
import Container from '@material-ui/core/Container';

import SelectPokemon from './Components/SelectPokemon';

function App() {

  const [pokemons, setPokemons] = useState([]);


  // const { results } = pokemons;

  // console.log(results);

  return (
      <> 
        
          <SelectPokemon
            setPokemons={setPokemons}
            pokemons={pokemons}
          />
        
      </>
    
  );
}

export default App;
