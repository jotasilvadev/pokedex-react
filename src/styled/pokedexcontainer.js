import styled from "styled-components";

const PokedexContainer = styled.div`
    min-width: 340px;
    background-color: #c42a2a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    border-radius: 20px;
    margin: 10px 15px 15px;
    border: 4px solid #fe1a55;
    box-shadow: 0px 0px 10px 3px #000;
    gap: 5px;

    background: ${(props) => props.theme.background};
    border: ${(props) => props.theme.border};
`;

export { PokedexContainer }