import { useState } from "react";
import ParametersStyle from "./ParametersStyle";
import axios from "axios";
import cityToCoord from "../Json/cityToCoord.json";

interface IButtons {
  content: string;
  icon: string;
}

const parametersName = [
  "temperature_2m",
  "apparent_temperature",
  "precipitation",
  "rain",
  "cloudcover",
  "windspeed_10m",
];

const buttons: IButtons[] = [
  {
    content: "Temperature",
    icon: "fa-solid fa-temperature-half",
  },
  {
    content: "ApparentTemp",
    icon: "fa-solid fa-temperature-high",
  },
  {
    content: "Precipitaion",
    icon: "fa-solid fa-droplet",
  },
  {
    content: "Rain",
    icon: "fa-solid fa-cloud-rain",
  },
  {
    content: "Cloud",
    icon: "fa-solid fa-cloud",
  },
  {
    content: "Wind",
    icon: "fa-solid fa-wind",
  },
];

const Parameters = () => {
  const [parameters, setParameters] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [city, setCity] = useState("");

  const { classes } = ParametersStyle();

  function handleChange(event: any) {
    setCity(event.target.value.toLowerCase());
  }

  function renderButtons() {
    let arrayButtons: JSX.Element[] = [];

    for (let i = 0; i < buttons.length; i++) {
      arrayButtons.push(
        <button
          className={parameters[i] ? classes.clicked : ""}
          type="button"
          onClick={() => handleParameters(i)}
          key={i}
        >
          <i className={buttons[i].icon}></i> {buttons[i].content}
        </button>
      );
    }
    return arrayButtons;
  }

  function handleParameters(nParam: number) {
    let newParameters = [...parameters];
    newParameters[nParam] = !newParameters[nParam];
    setParameters(newParameters);
  }

  return (
    <div className={classes.parametersContainer}>
      <input
        className={classes.inputLocation}
        placeholder="Choose a location"
        value={city}
        onChange={handleChange}
      />
      <div className={classes.parameters}>{renderButtons()}</div>
      <button className={classes.sendButton} onClick={handleRequest}>
        Get Info
      </button>
    </div>
  );
};

export default Parameters;
