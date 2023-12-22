import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Complete from './Complete';
import Trash from './Trash';

export default function App() {
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Router>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="home" label={<Link to="/" style={{ textDecoration: 'none' }}>Home</Link>} />
                    <Tab value="complete" label={<Link to="/complete" style={{ textDecoration: 'none' }}>Complete</Link>} />
                    <Tab value="trash" label={<Link to="/trash" style={{ textDecoration: 'none' }}>Trash</Link>} />
                </Tabs>
            </Box>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/complete" element={<Complete />} />
                <Route exact path="/trash" element={<Trash />} />
            </Routes>

        </Router>
    );
}
