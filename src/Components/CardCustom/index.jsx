import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";

export default function CardCustom({ id, title, description, courses }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image="https://d335luupugsy2.cloudfront.net/cms/files/107693/1639661491/$s20z34nynz"
        alt="random"
        sx={{ p: 2, background: "#c2c2c2" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver Cursos</Button>
      </CardActions>
    </Card>
  );
}
