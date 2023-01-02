import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styles from '../../../styles/Main.module.css';

const pages = [ {
                  title : 'หน้าหลัก',
                  part : '/'
                },
                {
                  title : 'กิจกรรม',
                  part : '/Components/Activites'
                },
                {
                  title : 'โครงการ',
                  part :  '/Components/projects'
                },
                {
                  title : 'ข้อมูลผลผลิต',
                  part : '/Components/productLists'
                },
                {
                  title  : 'ข้อเสนอแนะ',
                  part  : '/Components/suggestion'
                }];

const settings = [
                  {
                    title : 'ข้อมูลผู้ใช้',
                    part : 'userDashboard'
                  },
                  {
                    title : 'หน้าสรุปผลผลิต',
                    part : 'dashboard'
                  },
                  {
                    title : 'ออกจากระบบ',
                    part : 'logout'
                  }];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color='default' className={styles.navbar} sx={{ backgroundColor: 'rgb(195, 235, 249)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
            <picture>
                <img 
                    src="/images/vegetables.png" 
                    alt="logo-navbar" 
                    style={{ width: 50 , margin: 12 }}
                />
            </picture>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            B.B.M.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                textTransform: 'uppercase' 
              }}
            >
              {pages.map((page, index) => (
                <MenuItem className={styles.menuItem} key={index} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
       
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            B.B.M.
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
                <Link
                  key={index}
                  onClick={handleCloseNavMenu}
                  // sx={{ my: 2, color: 'black', display: 'block' , fontSize: '1rem' }}
                  style={{ color:'black' , display: 'block' , fontSize: '1rem' , padding: '0.5rem'}}
                  href={ page.part }
                >
                  {page.title}
                </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar className={styles.avatar} alt="Remy Sharp" src="/icon/avatar/user-icon.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu} >
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;