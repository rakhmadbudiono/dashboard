import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { Bar } from "react-chartjs-2";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import { DateRange, EmojiObjects, ArrowDownward } from "@material-ui/icons";
import {
  Typography,
  Container,
  MenuList,
  MenuItem,
  Divider,
  Button
} from "@material-ui/core";

import Header from "components/layout/Header";
import Sidebar from "components/layout/Sidebar";
import DatePicker from "components/DatePicker";
import Dropdown from "components/Dropdown";
import DropdownMenu from "components/DropdownMenu";
import DetailCard from "components/DetailCard";
import trollImage from "assets/troll.svg";
import ProductCard from "../components/ProductCard";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex"
  },
  flexAuto: {
    flex: "auto"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: "#F7F7F7",
    paddingTop: "8vh",
    paddingBottom: "80vh"
  },
  head: {
    display: "flex",
    marginTop: "1vw",
    marginBottom: "1vw"
  },
  period: { display: "flex" },
  dropdownPeriodIcon: {
    color: "#8B8B8B",
    marginRight: "1vw"
  },
  dropdownPeriodTitle: {
    color: "#8B8B8B",
    marginRight: "1vw",
    paddingRight: "15vw"
  },
  dropdownPeriodDate: {
    color: "#6A6A6A",
    float: "right"
  },
  periodTitle: { flex: "auto", paddingRight: "20vw" },
  menuList: {
    paddingRight: "2vw"
  },
  applyButton: {
    marginTop: "1vw"
  },
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
  trollImage: {
    width: "3vw"
  },
  marketInsightsTopCard: {
    marginTop: "1vw",
    width: "20vw"
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
  marginRight1: {
    marginRight: "1vw",
    flex: "auto"
  },
  salesTurnoverTitle: {
    color: "#8B8B8B"
  },
  salesTurnoverPrice: {
    fontWeight: "bold",
    fontSize: "x-large"
  },
  salesTurnoverDetails: {
    fontSize: "12px",
    display: "flex"
  },
  salesTurnoverPercentage: {
    color: "red",
    display: "flex"
  },
  salesTurnoverText: {
    color: "#8B8B8B",
    paddingLeft: "0.3vw"
  },
  avgSalesValue: {
    flex: "auto"
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
              summary={
                <Container className={classes.period}>
                  <div className={classes.flex}>
                    <DateRange className={classes.dropdownPeriodIcon} />
                    <Typography className={classes.dropdownPeriodTitle}>
                      Period
                    </Typography>
                  </div>

                  <Typography className={classes.dropdownPeriodDate}>
                    11 September 2018 - 14 September 2018
                  </Typography>
                </Container>
              }
              details={
                <Container className={classes.flex}>
                  <MenuList className={classes.menuList}>
                    <MenuItem>Today</MenuItem>
                    <Divider />
                    <MenuItem>Yesterday</MenuItem>
                    <Divider />
                    <MenuItem>Last 7 Day</MenuItem>
                    <Divider />
                    <MenuItem>Last 30 Day</MenuItem>
                    <Divider />
                    <MenuItem>Last Month</MenuItem>
                    <Divider />
                    <MenuItem>Custom</MenuItem>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.applyButton}
                    >
                      Apply
                    </Button>
                  </MenuList>
                  <Divider orientation="vertical" flexItem />
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
              <div className={classes.flexAuto}>
                <DetailCard
                  classes={classes.marketInsightsTopCard}
                  title={
                    <Typography className={classes.salesTurnoverTitle}>
                      Sales Turnover
                    </Typography>
                  }
                  content={
                    <div className={classes.flex}>
                      <div>
                        <Typography className={classes.salesTurnoverPrice}>
                          Rp 3,600,000
                        </Typography>
                        <Typography className={classes.salesTurnoverDetails}>
                          <div className={classes.salesTurnoverPercentage}>
                            <ArrowDownward />
                            <div>13.8%</div>
                          </div>
                          <div className={classes.salesTurnoverText}>
                            last period in products sold
                          </div>
                        </Typography>
                      </div>
                      <img
                        edge="end"
                        alt="Troll"
                        src={trollImage}
                        className={classes.trollImage}
                      />
                    </div>
                  }
                />
                <div className={classes.marketInsightsDetails}>
                  <DetailCard
                    classes={classes.marginRight1}
                    title={
                      <Container className={classes.flex}>
                        <Typography className={classes.avgSalesValue}>
                          AVERAGE SALES VALUE
                        </Typography>
                        <DropdownMenu
                          items={["Last 1 Month", "Last 6 Month"]}
                        />
                      </Container>
                    }
                    content={
                      <Bar
                        data={{
                          labels: [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July"
                          ],
                          datasets: [
                            {
                              type: "line",
                              label: "Expense for last year",
                              stack: "Expense",
                              data: [
                                30000,
                                80000,
                                50000,
                                100000,
                                60000,
                                40000,
                                90000
                              ]
                            },
                            {
                              label: "Expense for this year",
                              backgroundColor: "#6a82fb",
                              stack: "Expense",
                              data: [
                                10000,
                                30000,
                                50000,
                                80000,
                                60000,
                                20000,
                                10000
                              ]
                            },
                            {
                              label: "Expense for last year",
                              backgroundColor: "#fc5c7d",
                              stack: "Expense",
                              data: [
                                30000,
                                80000,
                                50000,
                                100000,
                                60000,
                                40000,
                                90000
                              ]
                            }
                          ]
                        }}
                        options={{
                          legend: {
                            display: false
                          },
                          title: {
                            display: false,
                            text: "Chart.js Line Chart - Stacked Area"
                          },
                          tooltips: {
                            intersect: false,
                            mode: "nearest"
                          },
                          hover: {
                            mode: "index"
                          },
                          scales: {
                            xAxes: [
                              {
                                scaleLabel: {
                                  display: false,
                                  labelString: "Month"
                                },
                                gridLines: {
                                  display: false
                                }
                              }
                            ],
                            yAxes: [
                              {
                                stacked: true,
                                scaleLabel: {
                                  display: false,
                                  labelString: "Value"
                                },
                                gridLines: {
                                  display: false
                                }
                              }
                            ]
                          }
                        }}
                      />
                    }
                  />
                  <DetailCard
                    classes={classes.marginRight1}
                    title={<Typography>BEST SELLING SKU</Typography>}
                    content={
                      <Container>
                        <ProductCard
                          productName="[Product Name]"
                          price="XXX"
                          amountSold="[jml terjual]"
                        />
                        <ProductCard
                          productName="[Product Name]"
                          price="XXX"
                          amountSold="[jml terjual]"
                        />
                        <ProductCard
                          productName="[Product Name]"
                          price="XXX"
                          amountSold="[jml terjual]"
                        />
                        <ProductCard
                          productName="[Product Name]"
                          price="XXX"
                          amountSold="[jml terjual]"
                        />
                      </Container>
                    }
                  />
                  <DetailCard
                    title={<Typography>TOP COMPETITOR SKU</Typography>}
                    content={
                      <Container>
                        <ProductCard
                          productName="[Product Name]"
                          price="XXX"
                          amountSold="[jml terjual]"
                        />
                        <ProductCard
                          productName="[Product Name]"
                          price="XXX"
                          amountSold="[jml terjual]"
                        />
                        <ProductCard
                          productName="[Product Name]"
                          price="XXX"
                          amountSold="[jml terjual]"
                        />
                        <ProductCard
                          productName="[Product Name]"
                          price="XXX"
                          amountSold="[jml terjual]"
                        />
                      </Container>
                    }
                  />
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
