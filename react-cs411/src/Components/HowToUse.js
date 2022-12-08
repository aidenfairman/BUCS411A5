import { Card, Typography } from "@mui/material"
import React from "react"


const HowToUse = () => {
    return(
        <div>
            <Card>
                <Typography>How to use website:</Typography> 
                <Typography> Feature 1: </Typography>
                <Typography> Search up to 3 tastes. Separate each taste with a space.</Typography>
                <Typography> Ex. You can search for sweet recipes by entering "Sweet"</Typography>
                <Typography> Ex. You can search for sweet AND sour by entering "Sweet Sour"</Typography>

            </Card>
        </div>
    )
}
export default HowToUse
