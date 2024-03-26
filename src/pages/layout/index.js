import * as React from 'react';
import { AppBar, Box, Drawer, Button, CssBaseline, IconButton, List, ListItem, ListItemButton, Toolbar, ListItemText, Stack, Avatar, Link, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { IconBarsStaggered, IconCareer, IconContacts, IconHome, IconMoonStars, IconProjects, IconSkills, IconSun } from '../../asstes/Icons';
import me from '../../asstes/me.jfif'
import useStore from '../../globalstate/store';
const drawerWidth = 240;

const navItems =
    [
        { name: "Home", route: "/",icons:<IconHome/> },
        { name: "Career", route: "/career" ,icons:<IconCareer/> },
        { name: "Skills", route: "/skills" ,icons:<IconSkills/> },
        { name: "Projects", route: "/projects",icons:<IconProjects/>  },
        { name: "Contact", route: "/contact",icons:<IconContacts/>  },
    ]
function Layout() {
    const { pathname } = useLocation()
    const { setText } = useStore();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleChngeTheme = () => {

        const currentTheme = localStorage.getItem('theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setText(newTheme)
        localStorage.setItem('theme', newTheme);

    }


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                }}>
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
            <Box component="main" sx={{ width: "100dvw", height: "100dvh" }} >
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                    }}>
                    <Toolbar />
                </Box>
                <Outlet />
                <Box
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                    }}>
                    <Toolbar />
                </Box>
            </Box>
            <AppBar component="nav"
                sx={{
                    top: 'auto',
                    bottom: 0,
                    display: { xs: 'block', sm: 'none' },
                }}
            >
                <Toolbar>


                    <Stack width="100%" direction="row" justifyContent="space-between" >
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                component={RouterLink}
                                to={item.route}

                                underline="none"
                                color='inherit'
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box sx={{background: pathname === item.route ? "rgba(255, 255, 255, 0.5)" : "transparent", px: 1, py: 0.5, borderRadius: 2, color: pathname === item.route ? 'black' : '', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                    {item.icons}
                                </Box>



                                <Typography variant='subtitle2'     color={`${pathname === item.route ? 'black' : ''}`}>
                                    {item.name}
                                </Typography>

                            </Link>


                        ))}
                    </Stack >
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default Layout;