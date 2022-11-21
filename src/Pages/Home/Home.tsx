import Parameters from "../../Components/Parameters/Parameters";
import HomeStyle from "./HomeStyle";

const Home = () => {
  const { classes } = HomeStyle();

  return (
    <div className={classes.home}>
      <section className={classes.inputsContainer}>
        <img src="/weather.jpg" alt="Error in Background" />
        <div className={classes.introTitles}>
          <h1>Weather App</h1>
          <h3>Get weather informations of the location you want !</h3>
          <h3>
            Choose a <span>location</span> and pick parameters you look for
          </h3>
        </div>

        <Parameters />
      </section>

      <section id="about">
        <h2>
          This Website in made by : <span>Ilias El-Abbassi</span>
        </h2>
        <h3>Software Engineer</h3>
      </section>
    </div>
  );
};

export default Home;
