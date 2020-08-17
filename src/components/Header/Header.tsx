import React from 'react'
import {Grid} from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//Assets.
import {headerStyles} from "./Header.style"

const Header = () => {
    const classes = headerStyles()
    return (
        <Grid container>
            <Grid item xs={12} md={12} lg={12}>
                <div>
                    <AppBar position="fixed" className={classes.app_bar_container}>
                        <Toolbar>
                        <Typography variant="h5" className={classes.title}>
                            Knowledge Chest
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
            </Grid>
        </Grid>
    )
}

export default Header
