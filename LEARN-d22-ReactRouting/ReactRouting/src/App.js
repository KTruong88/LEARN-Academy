import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';
import RecipeIndex from './RecipeIndex';
import recipes from './store/Recipes.js';
import RecipesDetail from './RecipeDetail.js';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Header name='Food' />
            <Route exact path='/' component={RecipeIndex} />

            <Route path='/recipes/:id' component={RecipesDetail} />
            <Footer />
          </div>

        </Router>
    );
  }
}

export default App;
