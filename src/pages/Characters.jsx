import React from "react";
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import { useFetchPotter } from "../hooks/useFetchPotter";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {
  const endpoint =
    "/characters?filter[name_cont_any]=Harry,Hermione,Albus,Severus,Draco,Sirius,Luna,Neville,Voldemort,Bellatrix&filter[image_present]=true&page[size]=12";

  const { data: characters, loading, error } = useFetchPotter(endpoint);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress size={60} color="success" />
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
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4, color: "#2e7d32" }}
      >
        Personajes Principales
      </Typography>

      <Grid container spacing={3}>
        {characters.slice(0, 8).map((char) => (
          <Grid key={char.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <CharacterCard character={char} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Characters;
