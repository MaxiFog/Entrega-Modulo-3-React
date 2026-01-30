import React from 'react';
import { Container, Typography, Grid, Alert } from '@mui/material';
import { useFavoriteStore } from '../store/useFavoriteStore';
import CharacterCard from '../components/CharacterCard';

const Favorites = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  return (
    <Container sx={{ py: 4 }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ color: '#2e7d32', fontWeight: 'bold', mb: 4 }}
      >
        Mis Magos Favoritos
      </Typography>

      {favorites.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          Aún no has guardado ningún mago. ¡Ve al inicio y elige tus favoritos!
        </Alert>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((char) => (
            <Grid item key={char.id} xs={12} sm={6} md={4} lg={3}>
              <CharacterCard character={char} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Favorites;