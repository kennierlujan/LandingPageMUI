import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import  ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import { proyectos } from "../database/Proyectos";


export const PortafolioPage = () => {

  return (
    <Container
      sx={{
        flexGrow: 1,
        background: "linear-gradient(178.82deg, #FBF8F8 3.72%, #015958 122.95%)",
        paddingY: 12,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Typography
        variant="h1"
        sx={{
          color: "primero.main",
          fontFamily: "roboto",
          fontSize: 42,
          fontWeight: "bold",
          marginBottom: 6,
          textAlign: "Center",
        }}>
        Portafolio
      </Typography>
      {proyectos.map((proyecto) => (
        <Box key={proyecto.id} sx={{ width: "100%" }}>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={24}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item md={6} xs={12}>
                <img
                  className="portafolio"
                  src={proyecto.imagen}
                  alt={proyecto.nombre}
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    fontSize: 28,
                    marginBottom: 2,
                  }}>
                  {proyecto.nombre}
                </Typography>
                <Typography sx={{
                  fontFamily: "Roboto",
                  fontSize: 16,
                  marginBottom: 2,
                }}>
                  {proyecto.descripcion}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "tercero.main",
                    marginBottom: 3,
                  }}>
                  {proyecto.stack}
                </Typography>

                <Stack spacing={2} direction="row">
                  <Button
                  sx={{
                    borderRadius: 10,
                    backgroundColor: "segundo.main",
                  }}
                  size="large"
                  variant="contained"
                  startIcon={<ArrowOutwardIcon />}
                  href={proyecto.link_preview}
                  target="_blank"
                  >
                    Vista Previa
                  </Button>

                  <Button
                  sx={{
                    borderRadius: 10,
                    backgroundColor: "primero.main",
                  }}
                  size="large"
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  href={proyecto.link_github}
                  target="_blank"
                  >
                    GitHub
                  </Button>

                </Stack>


              </Grid>

            </Grid>
          </Paper>
        </Box>
      ))}



    </Container>
  );
};
