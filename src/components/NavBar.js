import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import { amber } from '@material-ui/core/colors';

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <SportsCricketIcon style={{color:amber[500]}}></SportsCricketIcon>
                </IconButton>
                <Typography>Cricket Info</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
