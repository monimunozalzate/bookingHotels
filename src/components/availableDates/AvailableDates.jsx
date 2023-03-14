import { useState, useEffect } from "react";
import styles from "./AvailableDates.module.css";
import AddDates from "../addDates/AddDates";
import { display } from "@mui/system";
import DesktopDatePicker from "../datePicker/DesktopDatePicker";
import MobileDatePicker from '../datePicker/MobileDatePicker'
import { useWindowSize } from "../../assets/utils/useWindowSize";

const AvailableDates = () => {
  // ------calendar----------------------------------
  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();

  return (
    <div className={styles.availableContainer}>
      <h1>Fechas disponibles</h1>
      <div className={styles.componentsBox}>
        <div className={styles.datePicker}>          
          {size.width < 600 ? <MobileDatePicker {...isMobile}/> : <DesktopDatePicker  {...isMobile}/>}
        </div>
        <AddDates className={styles.datePicker} />
      </div>
    </div>
  );
};

export default AvailableDates;
