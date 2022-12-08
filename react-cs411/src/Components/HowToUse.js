import { Card, Typography } from "@mui/material"
import React from "react"


const HowToUse = () => {
    return(
        <div>
            <Card sx={{width:"800px", marginLeft:"360px"}}>
                <Typography>How to use website:</Typography> 
                <Typography> Feature 1: </Typography>
                <Typography> Search up to 3 tastes. Separate each taste with a space.</Typography>
                <Typography> Ex. You can search for <b>sweet</b> recipes by entering "Sweet"</Typography>
                <Typography> Ex. You can search for <b>sweet</b> AND <b>sour</b> recipes by entering "Sweet Sour"</Typography>

            </Card>
        </div>
    )
}
export default HowToUse
