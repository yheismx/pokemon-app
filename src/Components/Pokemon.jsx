import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const Pokemon = ({pokemon}) => {

    const showPokemon = () => {
        console.log(pokemon);
        // console.log(pokemon.sprites.front_default)

        // console.log(pokemon.sprites.front_default);
    }

  
    
    return (
        <>
            {
                pokemon.sprites === undefined ? null :
                <Grid container spacing={2}>

                    <Grid md={3} sm={12}>
                        <Paper >
                            <h2 style={{textAlign: 'center'}}>{pokemon.name}</h2>
                            <img onClick={showPokemon} style={{height:'200px'}} src={pokemon.sprites.front_default} alt=""/>
                        </Paper>
                    </Grid>

                    <Grid md={3} sm={12}>
                        <Paper >
                            <h2 style={{textAlign: 'center'}}>Stats</h2>
                            <ul>
                                {
                                    pokemon.stats.map((stat) => {
                                        return (
                                            <li>{stat.stat.name} : {stat.base_stat}</li>
                                        )
                                    })
                                }
                            </ul>
                        </Paper>
                    </Grid>

                    <Grid md={3} sm={12}>
                        <Paper >
                            <h2 style={{textAlign: 'center'}}>Moves</h2>
                            <ul>
                                {
                                    pokemon.moves.map((move) => {
                                        return (
                                            <li>{move.move.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </Paper>
                    </Grid>

                    <Grid md={3} sm={12}>
                        <Paper style={{textAlign: 'center'}}>
                            <h2 >Extras</h2>
                            <p>Height: {pokemon.height} ft</p>
                            <p>Weight: {pokemon.weight} lb</p>
                        </Paper>
                    </Grid>

                  

                </Grid>           
            }

           

            

           
        </>
    )
}

export default Pokemon
