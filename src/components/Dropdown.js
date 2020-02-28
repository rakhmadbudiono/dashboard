import React from "react";
import { ExpandMore } from "@material-ui/icons";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";

const Dropdown = props => {
  return (
    <ExpansionPanel
      className={props.classes}
      defaultExpanded={props.defaultExpanded}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMore />}
        className={props.summaryClasses}
      >
        {props.summary}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{props.details}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Dropdown;
