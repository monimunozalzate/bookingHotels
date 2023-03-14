import { useState, useEffect, useContext } from "react";
import { IconButton } from "@mui/material";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { FavoritesContext } from "../../context/Favorites.context";

const FavoriteIconComponent = ({ dataProductDetails }) => {
  const {
    favorites,
    setFavorites,
    handleFavorites,
    isInFavorites,
  } = useContext(FavoritesContext);
  const isInFavs = isInFavorites(dataProductDetails);

  const [isFav, setisFav] = useState(false);
  const handleColor = () => {
    setisFav(!isFav);
    console.log("im fav");
  };
  return (
    <>
      <IconButton value={isFav} onClick={handleColor}>
        {isFav ? <FavoriteSharpIcon color="error" /> : <FavoriteSharpIcon />}
      </IconButton>
      {/* <IconButton value={favorites} onClick={()=>handleFavorites(dataProductDetails)}>
        {isInFavs ? (
          <FavoriteSharpIcon color="error" />
        ) : (
          <FavoriteSharpIcon  />
        )}
      </IconButton> */}
    </>
  );
};

export default FavoriteIconComponent;
