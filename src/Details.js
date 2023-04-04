import './App.css';
import Header from './Header';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import APIKey from "./APIKey";

function Details(){
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const {id} = useParams();
    const getDetails = () => {APIKey.getPokemonDetails(id).then(output => {setPokemonDetails(output?.data)})}

    useEffect(() => {
        getDetails();
    }, []);

    return(
        <div>
            <Header></Header>
            <div className='details'>
            <table>
                    <tr>
                        <th>
                        <img className="main-image" alt={"pokemon image"} src={`${pokemonDetails.sprites?.other?.home?.front_default}`}></img>
            <div>
            <img className="poke-image" alt={"pokemon image"} src={`${pokemonDetails.sprites?.front_default}`}></img>
                    <img className="poke-image" alt={"pokemon image"} src={`${pokemonDetails.sprites?.back_default}`}></img>
                    <img className="poke-image" alt={"pokemon image"} src={`${pokemonDetails.sprites?.front_shiny}`}></img>
                    <img className="poke-image" alt={"pokemon image"} src={`${pokemonDetails.sprites?.back_shiny}`}></img>
            </div>
                        </th>
                        <td>
                        <table className='text'>
                            <tr>
                                <th>{pokemonDetails.forms?.[0]?.name}</th>
                            </tr>
                            <tr>
                                <th>Pokedex No.</th>
                                <td># {pokemonDetails.order}</td>
                            </tr>
                            <tr>
                                <th>Types</th>
                                <td>{pokemonDetails.types?.[0]?.type?.name}/{pokemonDetails.types?.[1]?.type?.name}</td>
                            </tr>
                            <tr>
                                <th>Height</th>
                                <td>{pokemonDetails.height / 10} m</td>
                            </tr>
                            <tr>
                                <th>Weight</th>
                                <td>{pokemonDetails.weight / 10} kg</td>
                            </tr>
                            <tr>
                                <th>HP</th>
                                <td>{pokemonDetails?.stats?.[0]?.base_stat}</td>
                            </tr>
                            <tr>
                                <th>Attack</th>
                                <td>{pokemonDetails?.stats?.[1]?.base_stat}</td>
                            </tr>
                            <tr>
                                <th>Defense</th>
                                <td>{pokemonDetails?.stats?.[2]?.base_stat}</td>
                            </tr>
                            <tr>
                                <th>Special Attack</th>
                                <td>{pokemonDetails?.stats?.[3]?.base_stat}</td>
                            </tr>
                            <tr>
                                <th>Special Defense</th>
                                <td>{pokemonDetails?.stats?.[4]?.base_stat}</td>
                            </tr>
                            <tr>
                                <th>Speed</th>
                                <td>{pokemonDetails?.stats?.[5]?.base_stat}</td>
                            </tr>
                            <tr>
                                <th>Moves</th>
                                <td>{pokemonDetails?.moves?.[0]?.move?.name}</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>{pokemonDetails?.moves?.[2]?.move?.name}</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>{pokemonDetails?.moves?.[3]?.move?.name}</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>{pokemonDetails?.moves?.[4]?.move?.name}</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>{pokemonDetails?.moves?.[5]?.move?.name}</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>{pokemonDetails?.moves?.[6]?.move?.name}</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>{pokemonDetails?.moves?.[7]?.move?.name}</td>
                            </tr>
                            <tr></tr>
                        </table>
                        </td>
                    </tr>
                </table>
        </div>
        </div>
    )
}

export default Details;