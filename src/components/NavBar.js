import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// Import your logo file
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box  sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor:'#ffff', height: '60px'}}>
      {/* Logo */}
      <Link to="/">
      <img src={logo} alt="Logo" style={{ height: '50px', marginLeft: '20px' }} />
      </Link>
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
       <Link to='/'> <Tab value="one" label="Home" /></Link>
       <Link to='/aboutus'> <Tab value="two" label="About us" /></Link>
       <Link to='/centers'>  <Tab value="three" label="Centers" /></Link>
       <Link to='/photos'> <Tab value="four" label="Photos" /></Link>
        <Tab value="five" label="Events" />
        <Tab value="six" label="Social Responsibility" />
        <Tab value="seven" label="Contact Us" />
      </Tabs>
    </Box>
  );
}
