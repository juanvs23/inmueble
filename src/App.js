import React from 'react';
import { Switch, Route } from 'react-router-dom'
import theme from './theme/theme'
import ListMueble from './component/listMueble'
import { MuiThemeProvider } from '@material-ui/core';
import { Grid } from '@material-ui/core'
import AppNavbar from './component/layout/AppNavbar';
import Register from './component/segurity/register';
import './App.css';

class App extends React.Component {
  render() {
    console.log(theme, MuiThemeProvider)
    return (

      <div className="App">
      <MuiThemeProvider theme={theme}>
      <AppNavbar/>
      
      <Grid container 
  direction="row"
  justify="space-around"
  alignItems="center">
      <Switch>
        <Route  path={'/'}  exact render={()=>{return <ListMueble/>}}/>
        <Route  path={'/usuario/registro'}  exact component={Register}/>
      
      </Switch>
      
      </Grid>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
