import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const QuotingResult = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 236);
    margin-top: 1rem;
    position: relative;
`;

const QuotingText = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({quoting}) => {

    return (
        (quoting === 0) 
            ? 
                <Message>Choose brand, year and insurance plan</Message> 
            :
            ( 
                <QuotingResult>
                    <TransitionGroup
                        component="span"
                        className="result"
                    >
                        <CSSTransition
                            classNames="result"
                            key={quoting}
                            timeout={{ enter: 500, exit: 500}}
                        >
                            <QuotingText>The total is $<span>{quoting} </span></QuotingText>
                        </CSSTransition>
                    </TransitionGroup>
                </QuotingResult>
            )
       );
}

Result.propTypes = {
    quoting: PropTypes.number.isRequired
}
 
export default Result;