import React, { useState, useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "./SearchBar.module.css";
import DropdownPlaces from "../dropdownPlaces/DropdownPlaces";
import DesktopCalendar from "../dropdownCalendar/DesktopCalendar";
import MobileCalendar from "../dropdownCalendar/MobileCalendar";
import { useWindowSize } from "../../assets/utils/useWindowSize";


const SearchBar = () => {
  const [isShown, setIsShown] = useState(false);
  
  const handleClick = (e) => {
    setIsShown(!isShown);
    if (isShownLocation) {
      setIsShownLocation(false);
    }
  };

  //-----------------places--------------------------------------------
  const [isShownLocation, setIsShownLocation] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem("value");
    if (storedValue) {
      setDropdownValue(JSON.parse(storedValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(dropdownValue));
  }, [dropdownValue]);

  function handleClose(){ 
      setIsShownLocation(false);
  }
  
  // ---------------------------calendar------------------------
  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();

  return (
    <form className={styles.searchBar} data-testid="search-bar">
      <h1>Busca ofertas en hoteles, casas y mucho más</h1>
      <div className={styles.inputs}>
        <section>
          <div className={styles.iconDiv}>
            <LocationOnIcon
              fontSize="medium"
              style={{
                color: "7F7F7F",
                paddingLeft: "0.5rem",
              }}
            />
            <input
              type="text"
              value={dropdownValue}
              placeholder="¿A dónde vamos?"
              onClick={() => setIsShownLocation(!isShownLocation)}
              data-testid="search-location-input"
              readOnly
            />
          </div>
          {isShownLocation && (
            <DropdownPlaces
              data-testid="dropdown-places"
              setDropdownValue={setDropdownValue}
              setIsShownLocation={setIsShownLocation}
            />
          )}
        </section>
        <section>
          <div
            className={styles.iconDiv}
            value={isShown}
            onClick={handleClose}
          >
            {/* <DesktopCalendar {...isMobile} 
              // handleClick={handleClick}
              /> */}
            {size.width < 600 ? (
              <MobileCalendar {...isMobile} />
            ) : (
              <DesktopCalendar {...isMobile} />
            )}
          </div>
        </section>
        <div>
          <button
            className="formButton"
            type="submit"
            style={{
              backgroundColor: "var(--orange)",
              color: "white",
              border: "none",
              borderRadius: "5px",
              height: "3rem",
              minWidth: "12.5rem",
              width: "100%",
              fontSize: "1rem",
            }}
          >
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
