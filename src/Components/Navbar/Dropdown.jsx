import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Dropdown = ({ handleMouseLeave, setMobileOpen }) => {
    return (
        <>
            <List sx={{
                // border: '2px solid red',
                color: 'black',
                padding: 0,
                backgroundColor: 'white',
                position: 'absolute',
                top: { xs: '2rem', sm: '4rem' },
                width: { xs: '7rem', sm: 'auto' },
                zIndex: '100',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                borderRadius: '4px'
            }}>
                <ListItem disablePadding>
                    <div style={{ margin: 'auto' }}>
                        <a href="#bitsaudi" onClick={() => {
                            handleMouseLeave()
                            setMobileOpen(false)
                        }} className="dropdownLinks">BitSaudi</a>

                        <a href="#bitwallet" onClick={() => {
                            handleMouseLeave()
                            setMobileOpen(false)
                        }} className="dropdownLinks">BitWallet</a>

                        <a href="#itservices" onClick={() => {
                            handleMouseLeave()
                            setMobileOpen(false)
                        }} className="dropdownLinks">IT Services</a>
                    </div>
                </ListItem>
            </List>
        </>
    )
}

export default Dropdown;