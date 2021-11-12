/* eslint-disable react/prop-types */
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import styles from "assets/UsersPage";

const useStyles = makeStyles(styles);

export default function UserPostCard({ post }) {
  const classes = useStyles();
  const { body, title } = post;
  const navigate = useNavigate();

  const handelBack = () => {
    console.log(post);
    navigate("/");
  };

  return (
    <Card className={classes.userPostsCardContainer}>
      <CardContent>
        {handelBack}
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
