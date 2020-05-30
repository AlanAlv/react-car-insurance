import React from 'react';
import styled from '@emotion/styled';
import { firstUpper } from '../helpers';

const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;  
`;

const Summary = ({data}) => {

    // Destructure data
    console.log(data);
    const { brand, year, plan } = data;

    if (brand === '' || year === '' || plan === '' ) return null;
    
    return ( 
        <SummaryContainer>
            <h2>Quoting Summary</h2>
            <ul>
                <li>Brand: {firstUpper(brand)}</li>
                <li>Car Year: {year}</li>
                <li>Plan: {firstUpper(plan)}</li>
            </ul>
        </SummaryContainer>
     );
}
 
export default Summary;