import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MoreVert } from "@material-ui/icons";
import { Card, CardHeader, CardContent, IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({}));

const DetailCard = props => {
  const classes = useStyles();

  return (
    <Card className={props.classes}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={props.title}
      />
      <CardContent>{props.content}</CardContent>
    </Card>
  );
};

export default DetailCard;
