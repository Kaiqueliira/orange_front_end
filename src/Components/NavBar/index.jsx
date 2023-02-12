import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { GiOrange } from "react-icons/gi";

export default function NavBar() {
  return (
    <AppBar position="relative">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <GiOrange />
        <Typography variant="h6" color="inherit" noWrap>
          Orange
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
