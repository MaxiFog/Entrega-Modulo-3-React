import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { useFavoriteStore } from "../store/useFavoriteStore";

const CharacterCard = ({ character }) => {
  const { name, image } = character.attributes;

  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);
  const favorites = useFavoriteStore((state) => state.favorites);

  const isFavorite = favorites.some((fav) => fav.id === character.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "15px",
        backgroundColor: "#ffffff",
        border: "2px solid #d4af37",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 12px 20px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: { xs: 250, sm: 320 },
          objectFit: "cover",
          borderBottom: "2px solid #d4af37",
        }}
        image={image}
        alt={name}
      />
      <CardContent
        sx={{ flexGrow: 1, textAlign: "center", backgroundColor: "#fffdf5" }}
      >
        <Typography
          variant="h6"
          sx={{ fontFamily: "Cinzel", fontWeight: "bold", fontSize: "1.1rem" }}
        >
          {name}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "center", pb: 2, backgroundColor: "#fffdf5" }}
      >
        <Button
          variant={isFavorite ? "contained" : "outlined"}
          color={isFavorite ? "error" : "primary"}
          onClick={handleToggleFavorite}
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
          }}
        >
          {isFavorite ? "Quitar" : "Favorito"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CharacterCard;
