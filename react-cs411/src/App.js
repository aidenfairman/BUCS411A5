import React from "react"
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import "./css/base.css"
import "./css/App.css"
import TasteOptions from "./Components/TasteOptions"
import FavRecipes from "./Components/FavRecipes"
import { Button, Card, TextField } from "@mui/material"
import { textTransform } from "@mui/system"
import FavoriteIcon from '@mui/icons-material/Favorite'


//Header component for login.
function Header () {
  return (
    < header >
      <div className="w">
        <div className="login">
          < a href="#">Please login</ a>
        </div>
      </div>
    </header >
  )
}


//Search component for searching a taste.
class Search extends React.Component {
  state = {
    search_item: "",  //Holds the input user enters. 
    parsed_search_item: []
  }

  //Update search_item when the input changes.
  searchItemChange = (e) => {
    this.setState({
      search_item: e.target.value
    })
  }

  //Sends the input to App when clicks on the button.
  getSearchItemHandler = () => {
    this.setState({
      parsed_search_item: this.state.search_item.toLowerCase().split(" ")
    }, () => {
      //Check the number of search items.
      if (this.state.parsed_search_item.length > 3) {
        alert("There are more than 3 search items.")
      }
      for (let x = 0; x < this.state.parsed_search_item.length; x++) {
        if (this.state.parsed_search_item[x] === "sweet" ||
          this.state.parsed_search_item[x] === "salty" ||
          this.state.parsed_search_item[x] === "sour" ||
          this.state.parsed_search_item[x] === "bitter" ||
          this.state.parsed_search_item[x] === "savory")  //Search only based on valid input.
        {
          continue
        }
        else {
          alert("The search item can only be sweet, salty, sour, bitter, or savory.")
        }
      }
      this.props.getSearchItem(this.state.parsed_search_item)
    })
  }

  render () {
    return (
      <div className="content w">
        <div className="logo">Food Search by Taste</div>
        <TasteOptions />
        {/* TODO: need to pass in results from all saved recipes when we press this button */}
        <FavRecipes />
        <div className="search">
          <TextField
            type="search"
            placeholder="Enter Any Taste"
            value={this.state.search_item}
            onChange={this.searchItemChange}
            sx={{ width: "700px" }}
            size="small"
          >
          </TextField>
          <Button
            sx={{ textTransform: "none", height: "20px", backgroundColor: "#0096FF" }}
            variant="contained"
            onClick={this.getSearchItemHandler}
            size="medium"
          >Search!
          </Button>
        </div>
      </div>
    )
  }
}

//Result component for displaying result.
class Result extends React.Component {
  state = {
    recipe_list: [],
    //****** ApiKey ******/
    key: "ad17578f923946ffb9d9fe3902c7ac0b"
  }

  //Call the random recipe api for one recipt.
  queryRecipes () {
    return axios({
      url: 'https://api.spoonacular.com/recipes/random',
      params: {
        apiKey: this.state.key,
        number: 10
      }
    }).then(response => {
      return response.data.recipes
    }).catch((error) => {
      console.log(error)
    })
  }

  //Call the taste api for a particular recipe.
  queryRecipeTaste (recipeID) {
    return axios({
      url: 'https://api.spoonacular.com/recipes/' + recipeID + '/tasteWidget.json',
      params: {
        apiKey: this.state.key
      }
    }).then(response => {
      return response.data
    }).catch((error) => {
      console.log(error)
    })
  }

  // Call Liked Recipes Api when to allow user to save a recipe
  saveRecipe (userID, recipeID) {
    return axios({
      url: 'http://localhost:8090/api/likedRecipe/addLikeRecipe',
      params: {
        userId: null, //null temporarily
        recipeId: recipeID
      }
    }).then(response => {
      return response.data
    }).catch((error) => {
      console.log(error)
    })
  }

  // retreives all the recipe saved by a user
  getSavedRecipes () {
    return axios({
      url: 'http://localhost:8090/api/likedRecipe/findByUserId',
      params: {
        userId: null, //null temporarily
      }
    }).then(response => {
      return response.data
    }).catch((error) => {
      console.log(error)
    })
  }

  // deletes a recipe selected by a  user
  deleteRecipe (recipeID) {
    return axios({
      url: 'http://localhost:8090/api/likedRecipe/delete',
      params: {
        userId: null, //null temporarily
        recipeId: recipeID
      }
    }).then(response => {
      return response.data
    }).catch((error) => {
      console.log(error)
    })
  }


  //Generate a list of recipes .
  async getApplicableRecipes (queryTaste) {
    //Number of recipes returned.
    const recipes = await this.queryRecipes()
    console.log(recipes)
    for (let x = 0; x < recipes.length; x++) {
      const taste_stats = await this.queryRecipeTaste(recipes[x].id)
      console.log(taste_stats)
      if (queryTaste.includes("sweet")) {
        if (taste_stats.sweetness >= 50) {
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
        }
      }
      else if (queryTaste.includes("salty")) {
        if (taste_stats.saltiness >= 30) {
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
        }
      }

      else if (queryTaste.includes("sour")) {
        if (taste_stats.sourness >= 20) {
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
        }

      }

      else if (queryTaste.includes("bitter")) {
        if (taste_stats.bitterness >= 20) {
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
        }
      }

      else if (queryTaste.includes("savory")) {
        if (taste_stats.savoriness >= 30) {
          this.setState({
            recipe_list: [...this.state.recipe_list, recipes[x]]
          })
        }
      }
    }
  }

  //Monitor change of search item and call getApplicableRecipes if there is a change.
  componentWillReceiveProps (nextProps) {
    if (nextProps.parsed_search_item !== this.props.parsed_search_item) {
      this.setState({
        recipe_list: []
      }, () => { this.getApplicableRecipes(nextProps.parsed_search_item) })
      //If it is a different input, regenerate the recipe list.
    }
  }

  render () {
    return (
      <div className="recipe_list w">
        <ul>
          {this.state.recipe_list.map(item => (
            <li key={item.id} className="recipe">
              <h1 className="recipe_title">{item.title}</h1>
              {/* <div>{item.extendedIngredients}</div> */}
              <div className="recipe_content clearfix">
                <div className="recipe_img">
                  <img src={item.image} />
                </div>
                <div className="recipe_ingredient_list">
                  <h2>Ingredients</h2>
                  <ul>
                    {item.extendedIngredients.map((ingredient, index) => (
                      <li className="ingredient" key={index}>{ingredient.name}</li>
                    )
                    )}
                  </ul>
                </div>
                <div className="like-button">
                  {/* TODO: make heart go red when the button is pressed to represent that it has been clicked */}
                  {/* <Button
                    onClick={this.saveRecipe(null, item.id)} >
                    <FavoriteIcon />
                  </Button> */}
                </div>
              </div>
            </li>
          )
          )}
        </ul>
      </div >
    )
  }
}

class App extends React.Component {
  state = {
    parsed_search_item: []
  }

  getSearchItem = (item) => {
    this.setState({
      parsed_search_item: item
    })
  }

  render () {
    return (
      <>
        <Header />
        <Search getSearchItem={this.getSearchItem} />
        <Result parsed_search_item={this.state.parsed_search_item} />
      </>
    )
  }
}

export default App