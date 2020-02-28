import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MoreVert } from "@material-ui/icons";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  IconButton,
  Typography
} from "@material-ui/core";

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
        title="Shrimp and Chorizo Paella"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};

export default DetailCard;
