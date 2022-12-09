import React from "react"
// import "./css/base.css"
// import "./css/App.css"
import Header from "./Header"
import Search from "./Search"
import Result from "./Result"
import HowToUse from "./HowToUse"




export default class Home extends React.Component {
  state = {
    parsed_search_item: [],
    diet_option: 'None',
    show_instruct: true
  }

  getShowInstruct = (item) => {
    this.setState({
      show_instruct: item
    })
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
      <>
        <Header />
        <Search getSearchItem={this.getSearchItem} getDietOption={this.getDietOption} />
        <HowToUse show_instruct={this.state.show_instruct} />
        <Result parsed_search_item={this.state.parsed_search_item} diet_option={this.state.diet_option} getShowInstruct={this.getShowInstruct} />
      </>
    )
  }
}