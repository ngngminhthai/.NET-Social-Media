import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import LoadingComponent from './LoadingComponent';

function App() {

  useEffect(() => {
  }, [])


  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
      </Container>

    </>
  );
}

export default App;
