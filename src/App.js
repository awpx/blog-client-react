import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { BlogContextProvider } from './contexts/BlogContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Post } from './pages/Post';
import { Footer } from './components/Footer';

function App() {
  return (
    <BlogContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:postId' exact component={Post} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </BlogContextProvider>
    
  );
}

export default App;
