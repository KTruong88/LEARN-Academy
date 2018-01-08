import React, { Component } from 'react'
import Recipes from './store/Recipes'
import {Link} from 'react-router-dom'

class RecipeIndex extends Component {
  componentWillMount(){
    this.setState({recipe: Recipes})
  }
  render() {
    console.log(this.state)
    let list = this.state.recipe.map((recipe) => {
      return(
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`} >
            {recipe.name}
          </Link>
        </li>
      )
    })
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default RecipeIndex;
