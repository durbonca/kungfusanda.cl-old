import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

import { StyledButton } from './styles';

const active = {
  color: 'red',
  backgroundColor: '#202020',
};

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/">HOME</Link>
          </Typography>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Link to="/">HOME</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent: 'right', display: { xs: 'flex', md: 'none' } }}>
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
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <NavLink to="/horarios" style={({ isActive }) => (isActive ? active : undefined)}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Horarios</Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="/kung-fu" style={({ isActive }) => (isActive ? active : undefined)}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Kung fu 武术蔡李佛</Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="/sanda" style={({ isActive }) => (isActive ? active : undefined)}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">SANDA 散打</Typography>
                </MenuItem>
              </NavLink>
              <NavLink to="/leon" style={({ isActive }) => (isActive ? active : undefined)}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">DANZA DE LEÓN CHINO 舞狮</Typography>
                </MenuItem>
              </NavLink>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, justifyContent: 'right', display: { xs: 'none', md: 'flex' } }}>
            <NavLink to="/horarios" style={({ isActive }) => (isActive ? active : undefined)}>
              <StyledButton variant="text" onClick={handleCloseNavMenu} sx={{ my: 2, mx: 2, display: 'block' }}>
                Horarios
              </StyledButton>
            </NavLink>
            <NavLink to="/kung-fu" style={({ isActive }) => (isActive ? active : undefined)}>
              <StyledButton variant="text" onClick={handleCloseNavMenu} sx={{ my: 2, mx: 2, display: 'block' }}>
                Kung fu 武术蔡李佛
              </StyledButton>
            </NavLink>
            <NavLink to="/sanda" style={({ isActive }) => (isActive ? active : undefined)}>
              <StyledButton variant="text" onClick={handleCloseNavMenu} sx={{ my: 2, mx: 2, display: 'block' }}>
                SANDA 散打
              </StyledButton>
            </NavLink>
            <NavLink to="/leon" style={({ isActive }) => (isActive ? active : undefined)}>
              <StyledButton variant="text" onClick={handleCloseNavMenu} sx={{ my: 2, mx: 2, display: 'block' }}>
                DANZA DE LEÓN CHINO 舞狮
              </StyledButton>
            </NavLink>
          </Box>
          <Box sx={{ flexGrow: 1, justifyContent: 'right', display: 'flex' }}>
            <a href="https://wa.me/56951787063" target="_blank" rel="noreferrer">
              <IconButton>
                <WhatsAppIcon />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/kungfuguangong/" target="_blank" rel="noreferrer">
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </a>
            <a href="https://www.facebook.com/kungfulaflorida/" target="_blank" rel="noreferrer">
              <IconButton>
                <FacebookIcon />
              </IconButton>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
