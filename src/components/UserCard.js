/* eslint-disable react/prop-types */
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

import styles from "assets/UsersPage";

const useStyles = makeStyles(styles);

export default function UserCard({ user }) {
  const classes = useStyles();
  const { id, name, username, phone, website, company } = user;
  const navigate = useNavigate();

  const handelForward = () => {
    console.log(user);
    navigate("/user/" + id);
  };
  return (
    <Card className={classes.userCardContainer} sx={{ minWidth: 275 }}>
      <CardActionArea onClick={handelForward}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            User name: {username}
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Phone: {phone}
          </Typography>
          <Typography variant="body2">company: {company.name}</Typography>
        </CardContent>
        <CardActions>
          <a href={website} size="small">
            Vist Website
          </a>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
