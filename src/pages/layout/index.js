import * as React from 'react';
import { AppBar, Box,  Drawer, Button, CssBaseline, IconButton, List, ListItem, ListItemButton, Toolbar, ListItemText, Stack, Avatar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { IconBarsStaggered, IconMoonStars, IconSun } from '../../asstes/Icons';
import me from '../../asstes/me.jfif'
import useStore from '../../globalstate/store';
const drawerWidth = 240;

const navItems =
    [
        { name: "Home", route: "/" },
        { name: "Career", route: "/career" },
        { name: "Skills", route: "/skills" },
        { name: "Projects", route: "/projects" },
        { name: "Contact", route: "/contact" },
    ]
function Layout() {
    const { pathname } = useLocation()
    const { setText} = useStore();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleChngeTheme = () => {
 
        const currentTheme = localStorage.getItem('theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setText(newTheme)
        localStorage.setItem('theme', newTheme);
       
    }
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} >
                        <ListItemButton
                            component={RouterLink}
                            to={item.route}
                            sx={{
                                textAlign: 'center',
                                borderRadius: "10px",
                                color: pathname === item.route ? 'white' : '',
                                ":hover": {
                                    background: "white",
                                    color: "black"
                                },
                                backgroundColor: pathname === item.route ? "primary.main" : "transparent",

                            }
                            }>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, mr: 2, display: { sm: 'none' } }}>


                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}

                        >
                            <IconBarsStaggered />
                        </IconButton>
                    </Box>
                    <Box

                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Avatar alt="Remy Sharp" src={me} />
                    </Box>
                    <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', sm: 'block' } }}>

                        {navItems.map((item, index) => (
                            <Button
                                key={index}
                                component={RouterLink}
                                to={item.route}
                                sx={{
                                    color: pathname === item.route ? 'black' : '#fff',
                                    ":hover": {
                                        background: "white",
                                        color: "black"
                                    },
                                    background: pathname === item.route ? "white" : "transparent",

                                }}
                            >
                                {item.name}
                            </Button>


                        ))}



                    </Stack >
                    <IconButton
                        id="basic-button"
                        sx={{ color: '#fff' }}
                        onClick={handleChngeTheme}
                    >
                        {
                            localStorage.getItem("theme") === "light" ? <IconSun /> : <IconMoonStars />
                        }

                    </IconButton>

                </Toolbar>
            </AppBar>
            <nav>
                <Drawer

                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ width: "100dvw", height: "100dvh" }} >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}


export default Layout;