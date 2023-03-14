import React, { useState, useEffect, useContext } from "react";
import ProductDescription from "../../components/productDescription/ProductDescription";
import AvailableDates from "../../components/availableDates/AvailableDates";
import UsagePolitics from "../../components/usagePolitics/UsagePolitics";
import ShareButton from "../../components/shareButton/ShareButton";
import BlockImages from "../../components/blockImages/BlockImages";
import ImageCarousel from "../../components/imageCarousel/ImageCarousel";
import recomendaciones from "../../assets/json/recomendaciones.json";
import BlockMap from "../../components/blockMap/BlockMap";
import BlockDetailsDescription from "../../components/blockDetailsDescription/BlockDetailsDescription";
import { useWindowSize } from "../../assets/utils/useWindowSize";
import FavoriteIconComponent from "../../components/favoriteIconComponent/FavoriteIconComponent";
import { FavoritesContext } from "../../context/Favorites.context";

const DetailsPage = () => {
  const [dataRecomendaciones, setDataRecomendaciones] = useState(
    recomendaciones
  );

  const size = useWindowSize();

  const { favorites, favPlaces } = useContext(FavoritesContext);

  return (
    <div>
      <ProductDescription />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <ShareButton />
        <FavoriteIconComponent  
        // dataProductDetails={dataProductDetails}
        />
      </div>

      {size.width < 900 ? (
        <ImageCarousel {...dataRecomendaciones} />
      ) : (
        <BlockImages {...dataRecomendaciones} />
      )}

      <BlockDetailsDescription />
      <AvailableDates />
      <BlockMap />
      <UsagePolitics />
    </div>
  );
};

export default DetailsPage;
