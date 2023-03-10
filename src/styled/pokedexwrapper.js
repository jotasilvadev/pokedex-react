import styled from "styled-components";

const PokedexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    background: ${(props) => props.theme.bgwrapper};
`;

export { PokedexWrapper }