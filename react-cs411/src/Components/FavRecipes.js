import React from "react"
import { Button } from "@mui/material"


const FavRecipes = () => {
    return(
        <div className="container">
            <div className="view-favs">
                <Button>View Saved Recipes</Button>
            </div>
            {/* TODO: display list of saved recipes */}
            {/* TODO: delete a saved recipe */}
        </div>
    )
}
export default FavRecipes