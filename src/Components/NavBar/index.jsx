import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import * as React from "react";
import { GiOrange } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <GiOrange />
          <Typography
            href="/"
            variant="h6"
            color="inherit"
            noWrap
            component="a"
            sx={{
              textDecoration: "none",
            }}
          >
            Orange
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
