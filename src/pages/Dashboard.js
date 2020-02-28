import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import { DateRange, EmojiObjects } from "@material-ui/icons";
import { Typography, Container } from "@material-ui/core";

import Header from "components/layout/Header";
import Sidebar from "components/layout/Sidebar";
import DatePicker from "components/DatePicker";
import Dropdown from "../components/Dropdown";
import Card from "../components/Card";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: "#F7F7F7",
    paddingBottom: "40vw"
  },
  head: {
    display: "flex",
    marginTop: "1vw",
    marginBottom: "1vw"
  },
  period: { flex: "auto", float: "right" },
  dropdownPeriodIcon: {
    color: "#8B8B8B",
    marginRight: "1vw"
  },
  dropdownPeriodTitle: {
    color: "#8B8B8B",
    marginRight: "1vw",
    paddingRight: "10vw"
  },
  dropdownPeriodDate: {
    color: "#6A6A6A",
    float: "right"
  },
  periodTitle: { flex: "auto", paddingRight: "20vw" },
  marketInsights: {
    marginTop: "2vw",
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "#F7F7F7"
  },
  marketInsightsSummary: {
    backgroundColor: "#37B04C"
  },
  marketInsightsDetails: {
    marginTop: "1vw",
    display: "flex"
  },
  marketInsightsTopCard: {
    marginTop: "1vw"
  },
  marketInsightsTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFFFFF",
    paddingRight: "65vw"
  },
  helpOptions: {
    textDecoration: "underline",
    color: "#FFFFFF"
  },
  toolbar: theme.mixins.toolbar
}));

const Dashboard = props => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <React.Fragment>
      <Header />
      <div className={classes.flex}>
        <Sidebar />
        <div className={classes.content}>
          <div className={classes.head}>
            <Typography variant="h3" className={classes.periodTitle}>
              Dashboard
            </Typography>
            <Dropdown
              className={classes.period}
              summary={
                <Container className={classes.flex}>
                  <DateRange className={classes.dropdownPeriodIcon} />
                  <Typography className={classes.dropdownPeriodTitle}>
                    Period
                  </Typography>
                  <Typography className={classes.dropdownPeriodDate}>
                    11 September 2018 - 14 September 2018
                  </Typography>
                </Container>
              }
              details={
                <Container className={classes.flex}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker />
                    <DatePicker />
                  </MuiPickersUtilsProvider>
                </Container>
              }
            />
          </div>
          <Dropdown
            classes={classes.marketInsights}
            summaryClasses={classes.marketInsightsSummary}
            defaultExpanded={true}
            summary={
              <div className={classes.flex}>
                <Typography className={classes.marketInsightsTitle}>
                  MARKET INSIGHTS
                </Typography>
                <EmojiObjects className={classes.helpOptions} />
                <Typography className={classes.helpOptions}>
                  Click Here for Help!
                </Typography>
              </div>
            }
            details={
              <div>
                <Card classes={classes.marketInsightsTopCard} />
                <div className={classes.marketInsightsDetails}>
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            }
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
