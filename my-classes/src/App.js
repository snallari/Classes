import logo from './logo.svg';
import './App.css';
import ParentPost from './components/ParentPost';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import PostDetailsContainer from './components/Details/PostDetailsContainer';
import ClassesTheme from './components/ClassesTheme';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <ThemeProvider/>
      <ThemeProvider theme={ClassesTheme}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Login/>
              </Route>
              <Route path="/posts">
                <ParentPost />
              </Route>
              <Route path="/postDetails">
                <PostDetailsContainer />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
