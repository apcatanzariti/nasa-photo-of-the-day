import React, { useState, useEffect } from "react";
import styled from 'styled-components'

export default function Picture ( {url, explanation} ) {
    return (
        <StyledPicture>
            <img src={url}/>
            <p>{explanation}</p>
        </StyledPicture>
    );
};

const StyledPicture = styled.div `
    border: 1px solid magenta;
    text-align: center;

    p {
        width: 80%;
        display: inline-block;
        font-style: italic;
    }
`;