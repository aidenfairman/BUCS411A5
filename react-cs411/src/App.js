import React from "react"
import "./css/base.css"
import "./css/App.css"
import { Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import FavRecipes from "./Components/FavRecipes"

class App extends React.Component {
  state = {
    parsed_search_item: [],
    diet_option: 'None',
  }

  getSearchItem = (item) => {
    this.setState({
      parsed_search_item: item
    })
  }

  getDietOption = (item) => {
    this.setState({
      diet_option: item
    })
  }

  render () {
    return (
      <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/saved-recipes" element={<FavRecipes/>}></Route>
      </Routes>
      </div>
    )
  }
}

export default App