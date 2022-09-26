import { Button, Container, Grid, Typography } from '@mui/material';
import ImagenPerfil from '../assets/ImagenPerfil.jpg';

export const PerfilPage = () => {
  return (
    <Container sx={{
      flexGrow: 1,
      background: "linear-gradient(180deg, #FFFFFF 67.34%, #008F8C 109.5%)",
      paddingTop: 15,
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
              fontSize: 48,
              marginBottom: 2,
            }}>
            Perfil
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "roboto",
              color: "primero.main",
              fontSize: 20,
              marginBottom: 6,
            }}
          >
            Ingeniero informático y tecnólogo en telecomunicaciones con 16 años de experiencia en el sector de las telecomunicaciones, pero ahora quiero trabajar en programación.
          </Typography>
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
            className="ImagenPerfil"
            src={ImagenPerfil} />
        </Grid>

      </Grid>

    </Container >
  )
}
