import React,{useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {
  const APP_ID = 'f4441ea3';
  const APP_KEY = 'df19f64cf641b512277b7552a794b16c';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("")
  const [query,setQuery] = useState("cheese");

  useEffect (() => {
  getRecipes()
  }, [query]);

    const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
      setSearch(e.target.value)
  }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch(" ");
    }

  return(
    <div className="App">
      <form onSubmit={getSearch} className ="search-form">
        <input className ="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Click Here</button>
      </form>
      <div className="recipes">
    {recipes.map(recipe =>(
      <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} images={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
    ))}
    </div>
    </div>
  )
}

export default App;