import { Card, Typography } from "@mui/material"
import React from "react"


const HowToUse = (props) => {
    return (
        <div>
            {props.show_instruct === true ?
                <Card sx={{ width: "800px", marginLeft: "360px" }}>
                    <Typography>How to use website:</Typography>
                    <Typography> Option 1: </Typography>
                    <Typography> Select up to 3 tastes to search for. Separate each taste with a space.</Typography>
                    <Typography> Ex. You can search for <b>sweet</b> recipes by entering "Sweet"</Typography>
                    <Typography> Ex. You can search for <b>sweet</b> AND <b>sour</b> recipes by entering "Sweet Sour"</Typography>

                    <br></br>

                    <Typography>Option 2: Nutrition </Typography>
                    <Typography>but after a search, by clicking on any diet option, the recipe lists will change to only show the recipes which satisfy the diet option.</Typography>
                    <Typography> Ex. <b>Search: "sweet" </b> and <b> Select: "Stay in Shape" </b> to search sweet recipes that allow you to stay in shape.</Typography>

                </Card>
                : null}
        </div>
    )
}
export default HowToUse
