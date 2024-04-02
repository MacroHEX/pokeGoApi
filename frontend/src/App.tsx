import logo from './assets/images/logo.png';
import './App.css';
import {ChangeEvent, useState} from "react";
import {Pokemon} from "./interfaces/Pokemon";
import {FindPokemon} from "../wailsjs/go/main/App";

function App() {

    const [pokemon, setPokemon] = useState<Pokemon | null>()
    const [pokemonName, setPokemonName] = useState('')
    const updateName = (event: ChangeEvent<HTMLInputElement>) => {
        setPokemonName(event.target.value);
    };
    const searchPokemon = () => {
        FindPokemon(pokemonName).then(setPokemon)
    }

    return (
        <>
            <div className='m-4 p-4'>
                <div className='flex justify-center content-center'>
                    <img src={logo} alt="logo"/>
                </div>
                <h1 className='mt-4 text-3xl'>The GoFull Pokemon API</h1>
                <h2 className='mt-4 text-xl'>Learning how to use Go + React</h2>

                <div className="flex mt-4">
                  <span
                      className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    https://pokeapi.co/api/v2/pokemon/
                  </span>
                    <input type="text" id="website-admin"
                           className="rounded-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="ditto" value={pokemonName} onChange={updateName}/>
                    <button type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md shadow-sm text-white bg-blue-500
                            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            onClick={searchPokemon}>
                        Search
                    </button>
                </div>

                {pokemon &&
                    <div className='flex mt-4 content-center justify-center'>
                        <div className='flex flex-col'>
                            <img src={pokemon.sprites.front_shiny} alt={pokemon.name}/>
                            <h2 className='text-2xl font-bold first-letter:capitalize'>{pokemon.name}</h2>
                            <div>
                                {pokemon.types.map(type => <div>{type.type.name}</div>)}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default App
