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

const cards = [0, 1, 2, 3, 4, 5];
export default function Trail(params) {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <CardCustom />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
