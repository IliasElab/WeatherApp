import { makeStyles } from "tss-react/mui";
import BasicStyle from "../../Utilites/BasicStyle";

const HomeStyle = makeStyles({ name: "HomeStyle" })(() => ({
  home: {
    fontFamily: "Montserrat, sans-serif",
  },

  inputsContainer: {
    height: "100vh",
    backgroundImage:
      "linear-gradient(to bottom, rgba(89, 115, 210, 0,) 50%,rgb(62, 87, 181) 100%)",
    img: {
      zIndex: "-10",
      position: "absolute",
      height: "100vh",
      width: "100%",
    },
  },

  introTitles: {
    paddingTop: "150px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    gap: "40px",
  },
}));

export default HomeStyle;
