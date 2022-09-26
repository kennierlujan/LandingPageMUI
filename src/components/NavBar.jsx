import * as React from 'react';
import LogoKennier from "../assets/Imagenlogo2.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import { 
    AppBar, 
    Box, 
    Container, 
    IconButton, 
    Menu,
    Toolbar, 
    Typography, 
} from "@mui/material";
import { Link } from "react-scroll";

export const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            elevation={0}
            sx={{
                backgroundColor: "primero.main",
                color: "white",
            }}
            position="fixed"
        >
            <Container maxWidth="full">
                <Toolbar>
                    {/* Logo y nombre escritorio */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                        <img className={{ width: 2 }} src={LogoKennier} />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "Roboto",
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Kennier Armando Luján García
                    </Typography>

                    {/* Botón de Menú Móvil */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link activeClass="active" smooth spy to="inicio">
                                <Typography
                                    sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                                >
                                    Inicio
                                </Typography>
                            </Link>
                            <Link activeClass="active" smooth spy to="perfil">
                                <Typography
                                    sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                                >
                                    Perfil
                                </Typography>
                            </Link>
                            <Link activeClass="active" smooth spy to="estudios">
                                <Typography
                                    sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                                >
                                    Estudios
                                </Typography>
                            </Link>
                            <Link activeClass="active" smooth spy to="experiencia">
                                <Typography
                                    sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                                >
                                    Experiencia
                                </Typography>
                            </Link>
                            <Link activeClass="active" smooth spy to="portafolio">
                                <Typography
                                    sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                                >
                                    Portafolio
                                </Typography>
                            </Link>
                            <Link activeClass="active" smooth spy to="contacto">
                                <Typography
                                    sx={{ marginRight: 2, padding: 2, cursor: "pointer" }}
                                >
                                    Contacto
                                </Typography>
                            </Link>
                        </Menu>
                    </Box>

                    {/* Logo y Nombre Móvil */}
                    <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
                        <img className={{ width: 2 }} src={LogoKennier} />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "Roboto",
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Kennier Luján
                    </Typography>

                    {/* Botones Menú Escritorio */}
                    <Box
                        sx={{
                            cursor: "pointer",
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "end",
                            display: { sx: "none", md: "flex" },
                        }}
                    >
                        <Link activeClass="active" smooth spy to="inicio">
                            <Typography sx={{ marginLeft: 6 }}>Inicio</Typography>
                        </Link>
                        <Link activeClass="active" smooth spy to="perfil">
                            <Typography sx={{ marginLeft: 6 }}>Perfil</Typography>
                        </Link>
                        <Link activeClass="active" smooth spy to="estudios">
                            <Typography sx={{ marginLeft: 6 }}>Estudios</Typography>
                        </Link>
                        <Link activeClass="active" smooth spy to="experiencia">
                            <Typography sx={{ marginLeft: 6 }}>Experiencia</Typography>
                        </Link>
                        <Link activeClass="active" smooth spy to="portafolio">
                            <Typography sx={{ marginLeft: 6 }}>Portafolio</Typography>
                        </Link>
                        <Link activeClass="active" smooth spy to="contacto">
                            <Typography sx={{ marginLeft: 6 }}>Contacto</Typography>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}
