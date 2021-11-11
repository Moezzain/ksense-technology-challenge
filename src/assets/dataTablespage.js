import { container } from "./material-kit-react.js";

const signupPageStyle = {
  root: {
    // zIndex: "2",
    // position: "relative",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    flexDirection: "column",
    marginTop: "50px",
    marginBottom: "100px",
    marginLeft: "150px",
    marginRight: "100px",
    color: "#fff",
    height: "60%",
    width: "80%",
  },
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    // paddingTop: "20vh",
    color: "#fff",
    // paddingBottom: "200px",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  },
  formControl: {
    marginTop: "5px",
    minWidth: 120,
    selfAlign: "center",
    marginRight: "10%",
    marginBottom: "5px",
    // paddingLeft: "15px",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDriection: "row",
  },
  selectEmpty: {
    marginTop: "5px",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px",
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  Afterheader: {},
  inputIconsColor: {
    color: "#495057",
  },
  table: {
    minWidth: 650,
  },
};

export default signupPageStyle;
