import { Pokedex } from "../components/pokedex/pokedex";
import { PokedexTitle } from "../styled/pokedextitle";
import { PokedexWrapper } from "../styled/pokedexwrapper";
import { PokedexContainer } from "../styled/pokedexcontainer";
import { useThemeContext } from "../context/theme";
import styled from "styled-components";

export const PokedexPage = () => {
    const { changeTheme } = useThemeContext();
    return (
        <PokedexWrapper>
            <PokedexContainer>
                <PokedexTitle>Pokédex</PokedexTitle>
                <Pokedex />
                <Button onClick={changeTheme}>START</Button>
            </PokedexContainer>
        </PokedexWrapper>
    );
};

const Button = styled.button`
    width: 70px;
    height: 25px;
    box-shadow: 0px 3px 0px 2px #481457;
    border: none;
    border-radius: 10px;
    background: rgb(188, 188, 188);
    font-family: "Share-TechMono", sans-serif;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
        filter: brightness(0.95);
        transform: translateY(2px);
        box-shadow: 0px 1px 0px 0px #481457;
    }
`;

