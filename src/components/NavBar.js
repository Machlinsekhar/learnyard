import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// Import your logo file
import logo from '../images/logo.png';

export default function NavBar() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor:'#DDE3EB', height: '60px'}}>
      {/* Logo */}
      <img src={logo} alt="Logo" style={{ height: '50px', marginLeft: '20px' }} />

      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Home" />
        <Tab value="two" label="About us" />
        <Tab value="three" label="Centers" />
        <Tab value="four" label="Photos" />
        <Tab value="five" label="Events" />
        <Tab value="six" label="Social Responsibility" />
        <Tab value="seven" label="Contact Us" />
      </Tabs>
    </Box>
  );
}
