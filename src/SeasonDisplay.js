import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: `Let's hit the beach!`,
    iconName: `sun`
  },
  winter: {
    text: `Brr, it's cold!`,
    iconName: `snowflake`
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? `summer` : `winter`;
  } else {
    return lat < 0 ? `summer` : `winter`;
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());

  // extract out all display logic into this area above the return
  const { text, iconName } = seasonConfig[season];

  return (
    // Avoid stuffing any logic into the JSX
    <>
      <div className={`season-display ${season}`}>
        <i className={`${iconName} icon massive icon-left`} />
        <h1>{text}</h1>
        <i className={`${iconName} icon massive icon-right`} />
      </div>
    </>
  );
};

export default SeasonDisplay;
