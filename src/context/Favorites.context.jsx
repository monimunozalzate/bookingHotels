import { useState, createContext } from "react";

export const FavoritesContext = createContext({ favorites: [] });

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorites = (hotel) => {
    const exist = favorites.some((element) => element.id === hotel.id);
    if (exist) {
      const newFavs = favorites.filter((element) => element.id !== hotel.id);
      setFavorites(newFavs);
    } else {
      setFavorites([...favorites, hotel]);
    }
  };

  const isInFavorites=(id)=>{
    return favorites.some((element) => element.id === id);
  }

  return (
    
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, handleFavorites,  isInFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );

};

export default FavoritesProvider;
