import React from "react"
import { Button } from "@mui/material"
import axios from "axios";
import { useState } from "react";


const FavRecipes = (user, recipes) => {
    const [list, setList] = useState([]);

    const getSavedRecipes = (user) => {
        return axios({
          url: 'http://localhost:8090/api/likedRecipe/findByUserId',
          params: {
            userId: user,
          }
        }).then(response => {
          return response.data
        }).catch((error) => {
          console.log(error)
        })
      }

    return(
        <div className="container">
            <div className="view-favs">
                <h1>Your Saved Recipes</h1>

            </div>
            <div className="fav-list"> 
                    
            </div>
            {/* TODO: display list of saved recipes */}

            {/* TODO: delete a saved recipe */}
        </div>
    )
}
export default FavRecipes