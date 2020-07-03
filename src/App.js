import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import BMI from './components/BMI/BMI'
import Calculate from './components/Calculate/Calculate'
import Transformers from './components/Transform/Transformer'
import styled from 'styled-components'
import Nav from './components/Nav/Nav'

  
const Main = styled.div`
height: 300px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
font-family: "MuseoModerno", cursive;
`;
class App extends Component{



render() {
  return (
    <Router>
      <Switch>
        <Main>
      <div className="App">
        <Nav/>
      <Route exact path='/'>
        <BMI/>
      </Route>
      <Route exact path='/calculate'>
        <Calculate/>
      </Route>
      <Route path='/transform'>
        <Transformers/>
      </Route>
      
    
    </div>
    </Main>
    </Switch>
    </Router>
  );
}
}

export default App;
