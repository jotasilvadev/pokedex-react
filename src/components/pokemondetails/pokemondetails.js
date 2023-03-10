import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const PokemonDetails = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((data) => setPokemon(data));
    }, [name]);

    return (
        <div>
            {pokemon && (
                <>
                    <ContainerInfo>
                        <PokemonSprite
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                        />
                        <PokeNameTitle>{pokemon.name}</PokeNameTitle>
                        <PokeType>
                            <ListTitle>Type:</ListTitle>
                            <PokeText>{pokemon.types[0].type.name}</PokeText>
                        </PokeType>
                        <PokeList>
                            <ListTitle>Abilities:</ListTitle>
                            <ul>
                                {pokemon.abilities &&
                                    pokemon.abilities.map((ability) => (
                                        <li key={ability.ability.name}>
                                            {ability.ability.name}
                                        </li>
                                    ))}
                            </ul>
                        </PokeList>
                        <PokeList>
                            <ListTitle>Moves:</ListTitle>
                            <ul>
                                {pokemon.moves.slice(0, 20).map((move) => (
                                    <li key={move.move.name}>
                                        {move.move.name}
                                    </li>
                                ))}
                            </ul>
                        </PokeList>
                    </ContainerInfo>                
                </>
            )}
        </div>
    );
};

export default PokemonDetails;


const ListTitle = styled.p`
    font-family: "Share-TechMono", sans-serif;
    font-size: 20px;
`;
const PokeText = styled.p`
    font-family: "Share-TechMono", sans-serif;
    font-size: 20px;
    text-transform: uppercase;
`;

const PokeType = styled.div`
    display: flex;
    gap: 5px;
    background-color: #c2d9ad;
    padding: 5px;
    border-radius: 5px;
    box-shadow: inset 0px 0px 5px 1px #000;
`;

const PokeList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    background-color: #c2d9ad;
    padding: 5px;
    border-radius: 5px;
    box-shadow: inset 0px 0px 5px 1px #000;
    font-family: "Share-TechMono", sans-serif;
`;

const ContainerInfo = styled.section`
    margin-top: 10px;
    width: 270px;
    gap: 6px;
    display: flex;
    flex-direction: column;
    background: rgb(188, 188, 188);
    background: linear-gradient(
        180deg,
        rgba(188, 188, 188, 1) 62%,
        rgba(91, 87, 84, 1) 100%
    );
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 8px 3px #000;
`;

const PokemonSprite = styled.img`
    background-color: #c2d9ad;
    max-height: 120px;
    max-width: 120px;
    align-self: center;
    border-radius: 10px;
    box-shadow: inset 0px 0px 6px 1px #000;
    filter: ${(props) => props.theme.brilho};
`;

const PokeNameTitle = styled.h1`
    font-family: "Share-TechMono", sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    display: flex;
    gap: 5px;
    background-color: #c2d9ad;
    padding: 5px;
    border-radius: 5px;
    box-shadow: inset 0px 0px 5px 1px #000;
`;