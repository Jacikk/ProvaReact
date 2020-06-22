import React from 'react';
import './styles.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Menu from '../Menu'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 20,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Grid item xs={3} className='logo'>
                        <Paper className={classes.paper}>Um site INCRIVEL!</Paper>
                    </Grid>
                </Grid>
                <Grid item xs={7}></Grid>

                <Menu />
                
            </Grid>
        </div>
    );
}