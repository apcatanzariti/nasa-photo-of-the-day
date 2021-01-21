import React, { useState, useEffect } from "react";
import styled from 'styled-components'

export default function PicInfo ( {title, date, copyright} ) {
    return (
        <StyledPicInfo>
            <h2>{title}</h2>
            <i><p>Photo by: {copyright}</p></i>
            <p>{date}</p>
        </StyledPicInfo>
    );
}

const StyledPicInfo = styled.div`
    border: solid 1px green;
`;