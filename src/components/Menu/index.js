import React from 'react';
import './styles.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        padding: 20,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    text: {

        textDecoration: 'none',
        color: 'black'
    }
}));

export default function Menu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <Button variant="contained"><Link to="/Home" className={classes.text}>Home</ Link></Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained"><Link to="/*" className={classes.text}>Teste</ Link></Button>
                </Grid>
            </Grid>
        </div>
    );
}