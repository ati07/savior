import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Equipment.css'
import { equipment, selectEquipment } from '../../../../features/counter/equipmentSlice';
import {useDispatch} from 'react-redux'
import {useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 320,
  },
}));

export default function Equipment() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [Input,setInput] = useState('')
  const dispatch = useDispatch()
  const item = useSelector(selectEquipment)
  // console.log("item",item)
useEffect(() => {
 if(item){
   setInput(item)
 }
}, [])
useEffect(() => {
  dispatch(equipment(Input))
}, [Input])
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const list =['None', 'Truck001','Truck002', 'Truck003',"Job Box 001", "Job Box 002"]
 const click=(e)=>{
  //  console.log("item",e)
  setInput(e)
  
 }
 
//  console.log("inputE",Input)
  return (
    <div>
     
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select The Equipment</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={Input}
          onChange={handleChange}
        >
          {list.map((item,i)=>(
            <MenuItem value={item} onClick={()=>click(`${item}`)}>
            {item}
          </MenuItem>
          
          ))}
        </Select>
      </FormControl>

    </div>
  );
}
