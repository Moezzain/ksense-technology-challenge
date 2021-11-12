import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// @material-ui/core components
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";

import UserPostCard from "components/UserPostCard";
import * as AxiosClient from "../Utilties/httpClient";

import styles from "assets/UsersPage";

const useStyles = makeStyles(styles);

export default function UsersPosts() {
  const classes = useStyles();
  const [userPosts, setUserPosts] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handelBack = () => {
    navigate("/");
  };

  const handelInit = () => {
    AxiosClient.GetPostsData("/posts")
      .then((result) => {
        result = JSON.parse(result);
        if (result.length !== 0) {
          console.log(
            result.filter((res) => {
              console.log(res.userId);
              console.log(params.id);
              res.userId == params.id;
            })
          );
          //__setData rows__
          setUserPosts(result.filter((res) => res.userId == params.id));
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
        <ArrowBackIosIcon onClick={handelBack} /> User Post
      </Typography>
      {userPosts.length === 0 && (
        <CircularProgress className={classes.loading} />
      )}

      <div className={classes.bottomPostContainer}>
        {userPosts.map((post, index) => {
          return (
            <div key={index}>
              <UserPostCard post={post} />
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
