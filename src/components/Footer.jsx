import { Box, Container, Typography } from '@mui/material'


export const Footer = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "primero.main",
        paddingY: 2,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Box>
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            mt: 1,
            ml: 2,
            display: "flex",
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: "tercero.main",
            textDecoration: "none",
          }}
        >Kennier Armando Luján García</Typography>
      </Box>
    </Container>
  )
}
