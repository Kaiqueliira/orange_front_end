import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link as LinkNavigation } from "react-router-dom";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Orange Cursos
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Projeto Feito com o intuito de aprender a fazer uma api com .net
              framework
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <LinkNavigation to="/Trail">
                <Button variant="contained">Cursos</Button>
              </LinkNavigation>
            </Stack>
          </Container>
        </Box>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
