import React from 'react'
import TasteOptions from "./TasteOptions"
import { Button, Card, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material"

export default class Search extends React.Component {
  state = {
    search_item: "",  //Holds the input user enters. 
    parsed_search_item: [],
    selected_value: "None"
  }

  handleChange = (value) => {
    this.setState({ selected_value: value })
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

        <div className="diet_options">
          <h2>Diet Options</h2>
          <Radio
            checked={this.state.selected_value === "Gain muscle"}
            onChange={() => {
              this.handleChange("Gain muscle")
              this.props.getDietOption("Gain muscle")
            }}
            value="Gain muscle"
            name="radio-buttons"
            inputProps={{ 'aria-label': '0' }}
          />
          <span
            className={this.state.selected_value === "Gain muscle" ? "selected_diet_option" : "not_selected_diet_option"}
          >
            Gain muscle
          </span>
          <Radio
            checked={this.state.selected_value === "Lower body fat rate"}
            onChange={() => {
              this.handleChange("Lower body fat rate")
              this.props.getDietOption("Lower body fat rate")
            }}
            value="Lower body fat rate"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'Lowering body fat rate' }}
          />
          <span
            className={this.state.selected_value === "Lower body fat rate" ? "selected_diet_option" : "not_selected_diet_option"}
          >Lower body fat rate</span>
          <Radio
            checked={this.state.selected_value === "Stay in shape"}
            onChange={() => {
              this.handleChange("Stay in shape")
              this.props.getDietOption("Stay in shape")
            }}
            value="Stay in shape"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'Stay in shape' }}
          />
          <span
            className={this.state.selected_value === "Stay in shape" ? "selected_diet_option" : "not_selected_diet_option"}
          >Stay in shape</span>
          <Radio
            checked={this.state.selected_value === "None"}
            onChange={() => {
              this.handleChange("None")
              this.props.getDietOption("None")
            }}
            value="None"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'None' }}
          />
          <span
            className={this.state.selected_value === "None" ? "selected_diet_option" : "not_selected_diet_option"}
          >None</span>
        </div>
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
