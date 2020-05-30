import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [ summary, saveSummary] = useState({
    quoting: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const [ loading, saveLoading] = useState(false);

  // Destructur data
  const { quoting, data } = summary;
  console.log(data);

  return (
    <Container>
      <Header 
        title='Car Insurance Quote'
      />

      <FormContainer>
        <Form 
          saveSummary={saveSummary}
          saveLoading={saveLoading}
        />

        {loading ? <Spinner /> : null}


        <Summary 
          data={data}
        />



        { 
          !loading 
            ?
              <Result 
                quoting={quoting}
              />
            :
              null
        }
      </FormContainer>

    </Container>

  
  );
}

export default App;
