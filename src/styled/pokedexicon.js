import styled from "styled-components";

const PokedexIcon = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #98af7b;
    padding: 5px;
    box-shadow: 0px 0px 10px 2px #000;
    transition: all 0.5s ease-in-out;    

    &:hover {
        box-shadow: 0px 0px 10px 2px #fff;
        filter: brightness(1.5);
    }
`;

export { PokedexIcon }