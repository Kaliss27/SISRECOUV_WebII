import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';


const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '50%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const sections = [
    { title: 'Inicio', url: './index.js' },
    { title: 'Donaciones Recibidas', url: './RegistroDR' },
    { title: 'Donaciones Emitidas', url: '#' },
    { title: 'Visitas', url: '#' },
    { title: 'Eventos', url: '#' },
    { title: 'Equipo Reco', url: '#' }
];

export default function RegistroVisitas() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="RECOLECTRON UV" sections={sections} />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Registro de eventos
                        </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="titEvnt"
                                    label="Titulo del evento"
                                    name="titEvnt"
                                    autoComplete="ltitEvnt"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Descripcion"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="date-visit"
                                    label="Fecha"
                                    type="datetime-local"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >    Registrar Evento
                        </Button>
                    </form>
                </div>
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </React.Fragment>
    );
}

//Simulación de respuesta en Archivo JSON
const ProgramasEducativos = [
    { nombre: 'Ingeniería en Electonica y Comunicaciones' },
    { nombre: 'Ingeniería Informática' },
    { nombre: 'Ingeniería Mecatrónica' },]

const Visitas = [
    { nombre: 'Arquitectura Computacional' },
    { nombre: 'Servicio Social' },
    { nombre: 'Voluntariado' },]