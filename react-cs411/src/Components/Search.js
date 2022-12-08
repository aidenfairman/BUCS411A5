import React, { Component } from 'react'
import TasteOptions from "./TasteOptions"
import FavRecipes from "./FavRecipes"
import { Button, Card, TextField } from "@mui/material"
import { textTransform } from "@mui/system"

export default class Search extends React.Component {
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
            sx={{ width: "700px", marginBottom:"50px" }}
            size="small"
          >
          </TextField>
          <Button
            sx={{ textTransform: "none", height: "20px", backgroundColor: "#0096FF" }}
            variant="contained"
            onClick={this.getSearchItemHandler}
            size="medium"
            style={{ verticalAlign: "top" }}
          >Search!
          </Button>
        </div>
      </div>
    )
  }
}
