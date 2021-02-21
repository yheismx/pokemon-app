import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


import Pokemon from './Pokemon';




const SelectPokemon = ({pokemons, setPokemons}) => {

    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.json())
            .then(allpokemon => setPokemons(allpokemon));

    }, ['']);

    const [pokemon, setPokemon] = useState('');
    const [pokemonUrl, setPokemonUrl] = useState('');
    const [pokemonData, setPokemonData] = useState({
        abilities : [],
        image : ''
    })


    const pokemonNames = pokemons.results;

    const handlePokemonName = (e) => {
        setPokemonUrl(e.target.value);
        
    }

  
    const handleUrl = () => {
          fetch(pokemonUrl)
            .then(response => response.json())
            .then(data => setPokemon(data))           
    }

    

    return (
        <>
            <Paper style={{padding:'40px', width:'80%'}}>
                <Grid container  spacing={2}>
                    <Grid item md={9} sm={12} >
                    <InputLabel id="demo-customized-select-label">Select Pokemon</InputLabel>
                        {/* {
                            pokemonNames === undefined ? null : pokemonNames.map(pokemon => <small>{pokemon.name}</small>)
                        } */}
                    <select
                        labelid="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Age"
                        style={{width:'100%', padding:'10px', fontSize:'15px'}}
                        value={pokemonUrl}
                        onChange={handlePokemonName}
                        
                    >

                        <option value="">---Select Pokemon---</option>
                        {
                            pokemonNames === undefined ? null : pokemonNames.map(pokemon => <option key={pokemon.url} value={pokemon.url}>{pokemon.name}</option>)
                        }
                    
                   
                    </select>
                    </Grid>

                    <Grid item md={3} sm={12} >
                        <Button onClick={handleUrl} style={{padding:'20px', paddingRight:'50px', paddingLeft: '50px'}} variant="contained" color="secondary" size="large">
                            Show
                        </Button>
                    </Grid>
                </Grid>
                
                <Paper style={{marginTop:'15px', padding:'15px', background:'#ffe21424'}}>

                    <Pokemon
                       pokemon={pokemon}

                    />
                </Paper>

            </Paper>
        </>
    )
}

export default SelectPokemon
