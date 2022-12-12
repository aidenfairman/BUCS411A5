import React, { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Button } from "@mui/material";
import axios from "axios";



function FavButton(username, recipeId) {
  const [active, setActive] = useState(false);

   const saveRecipe = (user, recipe) => {
    return axios.post({
      url: 'http://localhost:8090/api/likedRecipe/addLikeRecipe',
      params: {
        userId: user,
        recipeId: recipe
      }
    }).then(response => {
      console.log(response.data)
      return response.data
    }).catch((error) => {
      console.log(error)
    })
  }

  const handleClick = (username,recipeId) => {
    saveRecipe(username, recipeId)
    setActive(!active);
  };

  return (
    <div className="center">
      <Button
        onClick={() => handleClick(username, recipeId)}
        sx={{color:active ? "red": "gray"}}>
        <FavoriteIcon />
      </Button>
    </div>
  );
}

export default FavButton;