import React from "react"
import "../css/TasteOptions.css"

const TasteOptions = () => {
    const tastes = ["Sweet", "Sour", "Salty", "Savory", "Bitter"]
    return(
        <div className="container">
            <div className="options-bar">
                <div className="options">
                    Sweet Sour Salty Savory Bitter
                </div>
            </div>
        </div>
    )
}
export default TasteOptions
