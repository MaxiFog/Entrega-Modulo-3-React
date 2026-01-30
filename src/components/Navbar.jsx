import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories'; 
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'; 

const Navbar = () => {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        width: '100%',
        left: 0,
        right: 0,
        background: 'linear-gradient(135deg, #0d2b1d 0%, #1a472a 50%, #0d2b1d 100%)', 
        borderBottom: '3px solid #d4af37', 
        margin: 0,
        padding: 0,
        zIndex: 1100
      }}
    >
      <Container maxWidth={false}> 
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          
          <Box 
            component={Link} 
            to="/" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none', 
              color: '#d4af37', 
              gap: { xs: 1, sm: 1.5 }
            }}
          >
            <AutoFixHighIcon sx={{ fontSize: { xs: 24, sm: 30 } }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 700,
                fontSize: { xs: '1rem', sm: '1.5rem' },
                letterSpacing: { xs: '.1rem', sm: '.2rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              HOGWARTS WIKI
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 } }}>
            <Button
              component={Link}
              to="/"
              sx={{
                color: '#f4f1ea',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 600,
                fontSize: { xs: '0.75rem', sm: '0.9rem' },
                '&:hover': {
                  color: '#d4af37',
                }
              }}
            >
              PERSONAJES
            </Button>

            <Button
              component={Link}
              to="/favorites"
              variant="outlined"
              sx={{
                borderColor: '#d4af37',
                color: '#d4af37',
                borderRadius: '20px',
                fontWeight: 600,
                fontSize: { xs: '0.75rem', sm: '0.9rem' },
                px: { xs: 1, sm: 2 },
                '&:hover': {
                  borderColor: '#f4f1ea',
                  color: '#f4f1ea',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                }
              }}
            >
              <Box component="span" sx={{ display: { xs: 'none', sm: 'block' } }}>
                MIS FAVORITOS
              </Box>
              <Box component="span" sx={{ display: { xs: 'block', sm: 'none' } }}>
                FAVS
              </Box>
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;