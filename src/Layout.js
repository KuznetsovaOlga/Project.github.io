import React, { useState } from 'react';

import { withRouter, NavLink } from 'react-router-dom';
import { IconButton, Toolbar, AppBar } from '@material-ui/core/';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PublicIcon from '@material-ui/icons/Public';
import Typography from '@material-ui/core/Typography';


const drawerWidth = 240;
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const useStyles = makeStyles((theme) => {
    return ({
        root: {
            display: 'flex',
        },
        title: {
            flexGrow: 1,
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            // [theme.breakpoints.up('sm')]: {
            //     display: 'none',
            // },
        },
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        abbBar: {
            backgroundColor: "#85b6b88f"
        },
        link: {
            textDecoration: 'none',
            color: "black"
        },
    })
});

function Layout({ children, title }) {
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.abbBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    <span style={{ flexGrow: 1 }}></span>
                    <IconButton
                        color="inherit"
                        edge="end"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div>
                <SwipeableDrawer
                    anchor={'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    onOpen={handleDrawerToggle}
                    disableBackdropTransition={!iOS}
                    disableDiscovery={iOS}
                >
                    <div
                        role="presentation"
                        onClick={handleDrawerToggle}
                        onKeyDown={handleDrawerToggle}
                    >
                        <List>
                            <NavLink to="/news" key="news" className={classes.link}>
                                <ListItem button>
                                    <ListItemIcon><PublicIcon /></ListItemIcon>
                                    <ListItemText primary="News" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/album" key="album" className={classes.link}>
                                <ListItem button>
                                    <ListItemIcon><PhotoCameraIcon /></ListItemIcon>
                                    <ListItemText primary="Album" />
                                </ListItem>
                            </NavLink>
                        </List>
                    </div>
                </SwipeableDrawer>
            </div>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div >
    );
}

export default withRouter(Layout);

