import { useState } from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function getPokemonIdFromUrl(url) {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 2];
}

export const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [totalPokemons, setTotalPokemons] = useState(0);
    const [loadedPokemons, setLoadedPokemons] = useState(0);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
            .then((response) => response.json())
            .then((data) => {
                const newPokemons = data.results.map((pokemon, index) => ({
                    ...pokemon,
                    id: index + 1,
                }));
                setPokemons(newPokemons);
                setTotalPokemons(data.count);
            });
    }, []);

    console.log(Pokedex)
    const loadMorePokemons = () => {
        const nextOffset = loadedPokemons + 10;
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${nextOffset}`)
            .then((response) => response.json())
            .then((data) => {
                const newPokemons = data.results.map((pokemon, index) => ({
                    ...pokemon,
                    id: nextOffset + index + 1,
                }));
                setPokemons([...pokemons, ...newPokemons]);
                setLoadedPokemons(nextOffset);
            });
    };

    return (
        <ContainerDiv>
            {pokemons.map((pokemon) => (
                <PokeDiv key={pokemon.name}>
                    <PokeImg
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(
                            pokemon.url
                        )}.png`}
                        alt={pokemon.name}
                    />
                    <Link
                        to={`/pokemon/${pokemon.name}`}
                        style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                        <PokeName>
                            #{pokemon.id} {pokemon.name}
                        </PokeName>
                    </Link>
                </PokeDiv>
            ))}
            {loadedPokemons < totalPokemons && (
                <LoadButton onClick={loadMorePokemons}>
                    Mostre mais Pokemons!
                </LoadButton>
            )}
        </ContainerDiv>
    );
};



const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 340px;
    gap: 5px;
    align-items: center;
`

const PokeDiv = styled.div`
    display: flex;
    align-items: center;
    height: 67px;
    text-transform: uppercase;
    width: 290px;
    background-color: #bcbcbc;
    box-shadow: inset 0px 0px 5px 2px #000;
    border-radius: 10px;
    justify-content: center;
    gap: 25px;
    border: 1px solid #fe1a55;
`;

const PokeImg = styled.img`
    width: 53px;
    height: 53px;
    contain: content;
    background-color: #c2d9ad;
    border-radius: 50%;
    box-shadow: inset 0px 0px 7px 1px #000;
    transition: all 0.5s ease-in-out;
    filter: ${(props) => props.theme.brilho};

    &:hover {
        transform: scale(1.1);
        filter: brightness(1.3);
    }
`;

const PokeName = styled.p`
    width: 180px;
    font-size: 20px;
    font-family: "Share-TechMono", sans-serif;
    background-color: #c42a2a;
    color: #ffffff;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 2px #000;
    transition: all 0.9s ease-in-out;
    text-align: center;
    border: 1px solid #fe1a55;

    &:hover {
        background-color: #c2d9ad;
        transform: scale(1.04);
        box-shadow: inset 0px 0px 5px 1px #000;
        color: #000000;
        border: 1px solid #000;
    }
`;
const LoadButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    text-transform: uppercase;
    width: 270px;
    background-color: #c2d9ad;
    box-shadow: 0px 0px 7px 1px #000;
    border-radius: 10px;
    justify-content: center;
    cursor: pointer;
    font-family: "Share-TechMono", sans-serif;
    font-size: 20px;
    transition: all 0.7s ease-in-out;

    &:hover {
        color: #c42a2a;
        filter: brightness(0.8);
    }
`;

