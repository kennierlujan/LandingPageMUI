import { Button, Container, Grid, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ImagenLogo from '../assets/ImagenLogo.jpg';

export const InicioPage = () => {
  return (
    <Container sx={{
      flexGrow: 1,
      background: "linear-gradient(179.84deg, #023535 9.45%, #FFFFFF 88.36%)",
      paddingTop: 20,
      paddingBottom: 12,
      paddingX: { xs: 5, md: 20 },
    }}
      maxWidth="full"
    >
      <Grid container>
        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "roboto",
              fontWeight: "bold",
              color: "primero.main",
              fontSize: 60,
            }}>
            Hola, soy Kennier Luján
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "roboto",
              fontWeight: "bold",
              color: "segundo.main",
              fontSize: 50,
              marginBottom: 2,
            }}>
            Trabajemos juntos
          </Typography>
          <Button
            sx={{ borderRadius: 4 }}
            href="https://github.com/kennierlujan"
            target="_blank"
            size="large"
            variant="outlined"
            startIcon={<GitHubIcon />}
          >
            Perfil de GitHub
          </Button>
        </Grid>
        <Grid
          sx={{
            textAlign: { xs: "center", md: "right" },
            marginTop: { xs: 10, md: 0 },
          }}
          item
          xs={12}
          sm={6}
        >
          <img
            className="ImagenLogo"
            src={ImagenLogo} />
        </Grid>
      </Grid>
    </Container >
  )
}
