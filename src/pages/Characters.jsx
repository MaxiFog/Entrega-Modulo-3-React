import { Grid, Typography, Container, CircularProgress, Alert, Box } from '@mui/material';
import { useFetchPotter } from '../hooks/useFetchPotter';
import CharacterCard from '../components/CharacterCard';

const Characters = () => {
  const { data: characters, loading, error } = useFetchPotter('/characters');

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Personajes de Harry Potter
      </Typography>
      
      <Grid container spacing={4}>
        {characters.map((char) => (
          <Grid item key={char.id} xs={12} sm={6} md={4}>
            <CharacterCard character={char} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Characters;