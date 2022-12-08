import React from "react"
import "./css/base.css"
import "./css/App.css"
import Header from "./Components/Header"
import Search from "./Components/Search"
import Result from "./Components/Result"
import HowToUse from "./Components/HowToUse"

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
        <HowToUse />
        <Result parsed_search_item={this.state.parsed_search_item} />
      </>
    )
  }
}

export default App