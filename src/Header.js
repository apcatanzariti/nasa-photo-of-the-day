import React, { useState, useEffect } from "react";
import styled from 'styled-components'

export default function Header () {
    return (
        <StyledHeader>
            <h1>CoolSpaceStuff</h1>
            <p>Bringing you some cool new space stuff every day!</p>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    padding-top: 3%;
    border: 1px solid red;

    p {
        padding: 2%;
        border: 1px solid blue;
    }
`;