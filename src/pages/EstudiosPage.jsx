import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export const EstudiosPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        background: "linear-gradient(180deg, #008F8C -19.38%, #FFFFFF 53.99%)",
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
        Estudios
      </Typography>

      <Grid container>
        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>

          {/* Estudio 1 */}
          <Paper sx={{ backgroundColor: "tercero.main", margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant='h1'
              sx={{
                fontFamily: "roboto",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Ingenieria Informática
            </Typography>
            <Typography sx={{ fontFamily: "roboto" }}>
              Politecnico Colombiano Jaime Isaza C., Medellín, 2009
            </Typography>
          </Paper>

          {/* Estudio 2 */}
          <Paper sx={{ backgroundColor: "tercero.main", margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant='h1'
              sx={{
                fontFamily: "roboto",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Tecnología en Telecomunicaciones
            </Typography>
            <Typography sx={{ fontFamily: "roboto" }}>
              Servicio Nacional de Aprendizaje SENA, Medellín, 2006
            </Typography>
          </Paper>

          {/* Estudio 3 */}
          <Paper sx={{ backgroundColor: "tercero.main", margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant='h1'
              sx={{
                fontFamily: "roboto",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Fortinet NSE 1, NSE 2 y NSE 3
            </Typography>
            <Typography sx={{ fontFamily: "roboto" }}>
              Fortinet NSE Training Institute, 2022
            </Typography>
          </Paper>
        </Grid>

        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>

          {/* Estudio 4 */}
          <Paper sx={{ backgroundColor: "tercero.main", margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant='h1'
              sx={{
                fontFamily: "roboto",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              Diplomado en Desarrollo Front-End con React JS
            </Typography>
            <Typography sx={{ fontFamily: "roboto" }}>
              Fundación Internacional Maria Luisa de Moreno / Tecnologico de Antioquia / Livevox, 2022
            </Typography>
          </Paper>


          {/* Estudio 5 */}
          <Paper sx={{ backgroundColor: "tercero.main", margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant='h1'
              sx={{
                fontFamily: "roboto",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              ICND 1 y 2
            </Typography>
            <Typography sx={{ fontFamily: "roboto" }}>
              (Interconnecting Cisco Networking Devices), Global Knowledge, 2014
            </Typography>
          </Paper>


          {/* Estudio 6 */}
          <Paper sx={{ backgroundColor: "tercero.main", margin: 4, padding: 4, borderRadius: 5 }} elevation={8}>
            <Typography
              variant='h1'
              sx={{
                fontFamily: "roboto",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 2,
              }}
            >
              PMI - Applied Project Management
            </Typography>
            <Typography sx={{ fontFamily: "roboto" }}>
              PMI-2807 5.0 Applied Project Management, Global Knowledge, 2014 
            </Typography>
          </Paper>

        </Grid>

      </Grid>
    </Container>
  );
};
