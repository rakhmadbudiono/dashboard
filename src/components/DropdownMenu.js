import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const DropdownMenu = props => {
  const [data, setData] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChange = event => {
    setData(event.target.value);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel ref={inputLabel}>Filter</InputLabel>
      <Select value={data} onChange={handleChange} labelWidth={labelWidth}>
        {props.items.map(item => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownMenu;
