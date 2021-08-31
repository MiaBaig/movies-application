import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dropDownContainer: {
    paddingBottom: '20px'
  }
}));

export default function SimpleSelect(props) {
  const {value, handler, data} = props;
  const classes = useStyles();
  const handleChange = (event) => {
    handler(event.target.value);
  };
  return (
    <div className={classes.dropDownContainer}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Character:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}>
          {data.map((item, index) => (
            <MenuItem value={item} key={index}> {item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
