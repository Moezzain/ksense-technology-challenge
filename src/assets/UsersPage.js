import { container } from "./material-kit-react.js";

const signupPageStyle = {
  root: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    flexDirection: "column",
    marginTop: "50px",
    marginBottom: "100px",
    marginLeft: "150px",
    marginRight: "100px",
    height: "60%",
    minHeight: "500px",
    width: "80%",
  },
  bottomContainer: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    flexDirection: "row",
  },
  bottomPostContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  titleContainer: {
    margin: "20px",
  },
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    color: "#fff",
  },
  userCardContainer: {
    margin: "20px",
    minWidth: "275px",
  },
  userPostsCardContainer: {
    width: "90%",
    margin: "20px",
  },
  loading: {
    alignSelf: "center",
  },
};

export default signupPageStyle;
