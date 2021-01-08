import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Header from '../components/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import imageBanner from '../images/banner_recoUV.jpg';



const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Inicio', url: '#' },
  { title: 'Donaciones Recibidas', url: '../pages/RegistroDR' },
  { title: 'Donaciones Emitidas', url: '../pages/RegistroDE' },
  { title: 'Visitas', url: '../pages/Visitas' },
  { title: 'Eventos', url: '../pages/Eventos' },
  { title: 'Equipo Reco', url: '../pages/LoginReco' }
];

const mainFeaturedPost = {
    image: imageBanner,
  imgText: 'main image description',
};

const posts = ["post1", "post2", "post3"];

const sidebar = {
  social: [
    { name: 'GitHub', icon: GitHubIcon, url:'#' },
        { name: 'Instagram', icon: InstagramIcon, url:'https://www.instagram.com/reco.uv/?fbclid=IwAR0hQzxgyBf4Z3Hb6NojrcKAS54nhamjjQMIZq5xJMm_hDIe-1gakPJuf3U' },
        { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/reco.uv' },
  ],
};

export default function InicioReco() {
    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="RECOLECTRON UV" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={1} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}