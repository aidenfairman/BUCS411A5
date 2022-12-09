import React from "react"
import "./css/base.css"
import "./css/App.css"
import Header from "./Components/Header"
import Search from "./Components/Search"
import Result from "./Components/Result"
import HowToUse from "./Components/HowToUse"
import { Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import Home from "./Components/Home"

class App extends React.Component {
  state = {
    parsed_search_item: [],
    diet_option: 'None'
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

  // render () {
  //   return (
  //     <>
  //       <Header />
  //       <Search getSearchItem={this.getSearchItem} getDietOption={this.getDietOption} />
  //       <HowToUse />
  //       <Result parsed_search_item={this.state.parsed_search_item} diet_option={this.state.diet_option} />
  //     </>
  //   )
  // }
  render () {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    )
  }
}

export default App