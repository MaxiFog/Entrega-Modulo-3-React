import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { useFavoriteStore } from '../store/useFavoriteStore';

const CharacterCard = ({ character }) => {
  const { name, image } = character.attributes;
  
  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const favorites = useFavoriteStore((state) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.id === character.id);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="300"
        image={image || 'https://via.placeholder.com/300x400?text=No+Image'}
        alt={name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          variant={isFavorite ? "contained" : "outlined"}
          color="primary"
          onClick={() => addFavorite(character)}
          disabled={isFavorite}
        >
          {isFavorite ? "En Favoritos" : "Añadir a Favoritos"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CharacterCard;