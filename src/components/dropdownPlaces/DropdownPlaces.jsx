import React, {useState} from "react";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import styles from "./DropdownPlaces.module.css";
import axios from "axios";
// import places from "../../assets/json/places.json";

const DropdownPlaces = ({ setDropdownValue }) => {
  // call to api
  const baseURL = "http://localhost:8090/api/ubicaciones"
  const [location, setLocation] = useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLocation(response.data);
    });
  }, []);

  if (!location) return null;


  const handleClick = (e) => {
    const value = e.target.innerText;
    setDropdownValue(value);
  };

  return (
    <div className={styles.placesCard} data-testid="dropdown-places">
      {location.map((place) => (
        <div className={styles.place} key={place.id} onClick={handleClick}>
          <div className={styles.side}>
            <LocationOnSharpIcon style={{ color: "#31363F" }} />
            <div className={styles.location}>
              <p>
                {place.ciudad} 
                <span >{place.pais}</span>
              </p>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DropdownPlaces;
