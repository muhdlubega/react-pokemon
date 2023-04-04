import './App.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import APIKey from './APIKey';
import Header from './Header';

function HomePage(){

    const [pokemonArray, setPokemonArray] = useState([]);
    const navigate = useNavigate();

    const getPokemonName = () => {
        APIKey.getPokemon().then(output => {setPokemonArray(output?.data?.results)})
    }

    useEffect(() => {
        getPokemonName();
    }, []);


    return(
        <div>
        <Header></Header>
            <div className='container'>
            {pokemonArray.map(i =>(<div className='poke-group' key={i.name}>
            <img className='poke-image' alt={"pokemon image"} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i.url.split('/')[6]}.png`} onClick={()=>{navigate(`/details/${i.url.split('/')[6]}`)}}></img>
            <div>{i.name}</div>
            </div>))}
        </div>
        </div>
    )

}

export default HomePage;