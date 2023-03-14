import React, { useReducer } from "react";
import { DateRangeInput, START_DATE } from "@datepicker-react/styled";
import "./DesktopCalendar.css";

const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "focusChange":
      return { ...state, focusedInput: action.payload };
    case "dateChange":
      return action.payload;
    default:
      throw new Error();
  }
}

function DesktopCalendar() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="desktopCalendar">
      <DateRangeInput
        onDatesChange={(data) =>
          dispatch({ type: "dateChange", payload: data })
        }
        onFocusChange={(focusedInput) =>
          dispatch({ type: "focusChange", payload: focusedInput })
        }
        startDate={state.startDate} // Date or null
        endDate={state.endDate} // Date or null
        focusedInput={state.focusedInput} // START_DATE, END_DATE or null
        showResetDates={false}
        vertical={false}
        numberOfMonths={2}
        showClose={false}
        showSelectedDates={false}
      />
    </div>
  );
}
export default DesktopCalendar;
