import React from 'react';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Vini from '../../Assets/Avatar/vinicius.jpeg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 20,

    },
    large: {
        width: '8vw',
        height: '8vw',
    },
    footerContent: {
        display:'flex', 
        justifyContent:'center',
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{display:'flex', marginLeft: '30vw'}}>Created By:</div>
            <div className={classes.footerContent}><Avatar alt="Vinicius Jacik" src={Vini} className={classes.large} />Vinicius Jacik<br />Estudante de Engenharia de Software</div>
            <div className={classes.footerContent}>©Vinicius Jacik - 2020</div>
        </div>
    );
}