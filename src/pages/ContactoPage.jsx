import { Button, Container, Grid, Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const ContactoPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        background: "linear-gradient(178.82deg, #FBF8F8 3.72%, #015958 122.95%)",
        paddingY: 4,
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
          marginBottom: 4,
          textAlign: "Center",
        }}>
        Contacto
      </Typography>

        <Grid
          sx={{ textAlign: { xs: "center", md: "right" } }}
          item
          xs={12}
          md={6}
        >
          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              backgroundColor: "#128C7E",
            }}
            size="large"
            variant="contained"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/573105406603?text=Hola, Soy Kennier Luján."
            target="_blank"
          >
            WhatsApp
          </Button>

          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              backgroundColor: "black",
              color: "white",
            }}
            size="large"
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/kennierlujan"
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              backgroundColor: "White",
              color: "blue",
            }}
            size="large"
            variant="contained"
            startIcon={<FacebookIcon />}
            href="https://www.facebook.com/kennier07lujan"
            target="_blank"
          >
            Facebook
          </Button>

          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              backgroundColor: "#1DA1F2",
            }}
            size="large"
            variant="contained"
            startIcon={<TwitterIcon />}
            href="https://twitter.com/kennier07lujan"
            target="_blank"
          >
            Twitter
          </Button>

          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB  90%)",
            }}
            size="large"
            variant="contained"
            startIcon={<InstagramIcon />}
            href="https://www.instagram.com/kennier07lujan"
            target="_blank"
          >
            Instagram
          </Button>

          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              backgroundColor: "#blue",
            }}
            size="large"
            variant="contained"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/kennier-lujan-garcia-0ba4951b4"
            target="_blank"
          >
            LinkedIn
          </Button>
        </Grid>
 
    </Container>
  )
}
