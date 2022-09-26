import { TheaterComedyRounded } from '@mui/icons-material';
import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export const ExperienciaPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        background: "linear-gradient(180deg, #0CABA8 -6.16%, #FFFFFF 13.19%, #FFFFFF 79.6%, #0CABA8 99.73%)",
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
        Experiencia
      </Typography>

      <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>

        {/* Experiencia 1 */}
        <Paper sx={{ backgroundColor: "segundo.main", margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
          <Typography
            variant='h1'
            sx={{
              fontFamily: "roboto",
              fontWeight: "bold",
              fontSize: 22,
              marginBottom: 2,
            }}
          >
            InterNexa S.A.
          </Typography>
          <Typography sx={{ fontFamily: "roboto" }}>
            <p>Ingeniero de Proyectos</p>
            <p>Nov/2012 - Actualmente</p>
          </Typography>
        </Paper>

        {/* Experiencia 2 */}
        <Paper sx={{ backgroundColor: "segundo.main", margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
          <Typography
            variant='h1'
            sx={{
              fontFamily: "roboto",
              fontWeight: "bold",
              fontSize: 22,
              marginBottom: 2,
            }}
          >
            InterNexa S.A.
          </Typography>
          <Typography sx={{ fontFamily: "roboto" }}>
            Ingeniero de Gestión e Ingeniero Configurador 
            Dic/2007 – Nov/2012
          </Typography>
        </Paper>

        {/* Experiencia 3 */}
        <Paper sx={{ backgroundColor: "segundo.main", margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
          <Typography
            variant='h1'
            sx={{
              fontFamily: "roboto",
              fontWeight: "bold",
              fontSize: 22,
              marginBottom: 2,
            }}
          >
            FLYCOM COMUNICACIONES S.A.
          </Typography>
          <Typography sx={{ fontFamily: "roboto" }}>
            Ingeniero de Gestión 
            Dic/2005 – Dic/2007
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
};
