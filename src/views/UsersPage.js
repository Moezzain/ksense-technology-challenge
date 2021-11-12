import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";

import UserCard from "components/UserCard";
import * as AxiosClient from "../Utilties/httpClient";

import styles from "assets/UsersPage";

const useStyles = makeStyles(styles);

export default function UsersTable() {
  const classes = useStyles();
  const [userData, setUserData] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handelInit = () => {
    AxiosClient.GetUsersData("/users")
      .then((result) => {
        result = JSON.parse(result);
        if (result.length !== 0) {
          console.log(result);
          //__setData rows__
          setUserData(result);
        }
      })
      .catch((error) => {
        setOpen(true);
        console.log(error);
      });
  };

  useEffect(() => {
    handelInit();
  }, []);

  return (
    <Paper className={classes.root}>
      <Typography
        className={classes.titleContainer}
        variant="h5"
        component="div"
      >
        Users Data
      </Typography>
      {userData.length === 0 && (
        <CircularProgress className={classes.loading} />
      )}

      <div className={classes.bottomContainer}>
        {userData.map((user, index) => {
          return (
            <div key={index}>
              <UserCard user={user} />
            </div>
          );
        })}
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Internet Error
        </Alert>
      </Snackbar>
    </Paper>
  );
}
