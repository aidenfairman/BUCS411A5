import React, { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Button } from "@mui/material";


function FavButton() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="center">
      <Button
        onClick={handleClick}
        sx={{color:active ? "red": "gray"}}>
        <FavoriteIcon />
      </Button>
    </div>
  );
}

export default FavButton;