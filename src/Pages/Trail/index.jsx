import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { GiOrange } from "react-icons/gi";
import CardCustom from "../../Components/CardCustom";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";

const cards = [
  { id: 1, title: "Front-end", description: "Essa é a trilha de Frontend" },
  { id: 2, title: "Back-end", description: "Essa é a trilha de Backend" },
  { id: 3, title: "DevOps", description: "Essa é a trilha de DevOps" },
];
export default function Trail(params) {
  return (
    <>
      <NavBar />
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h2" mb={2}>
          Trilhas
        </Typography>
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map(({ id, title, description }) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <CardCustom title={title} description={description} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
