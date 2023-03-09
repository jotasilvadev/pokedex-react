import React, { useState } from "react";
import styled from "styled-components";

function ChangeBackgroundButton() {
    const [isBlack, setIsBlack] = useState(false);

    function changeBackgroundColor() {
        const body = document.querySelector("body");
        const color = isBlack ? "#481556" : "black";
        body.style.backgroundColor = color;
        setIsBlack(!isBlack);
    }

    return (
        <BgColor onClick={changeBackgroundColor}>
            {isBlack ? "START" : "START"}
        </BgColor>
    );
}

export default ChangeBackgroundButton;

const BgColor = styled.button`
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


