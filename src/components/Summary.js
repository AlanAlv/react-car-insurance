import React, {Fragment} from 'react'

const Summary = (data) => {

    // Destructure data
    console.log(data);
    const { brand, year, plan } = data;

    if (brand === '' || year === '' || plan === '' ){
        return null;
    }
    return ( 
        <Fragment>
            <h2>Quoting Summary</h2>
            <ul>
                <li>Brand: </li>
                <li>Car Year: </li>
                <li>Plan: </li>
            </ul>
        </Fragment>
     );
}
 
export default Summary;