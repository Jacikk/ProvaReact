import React from 'react';
import './styles.css'
import Header from '../../components/Header'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Footer from '../../components/Footer'
import Lupa from '../../Assets/images/lupabranca.png'

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        minHeight: '25vw'
    },
    text: {
        justifyContent: 'center',
        textDecoration: 'none',
        color: 'white',

    },
    img: {
        
        justifyContent: 'center',
        width: '15vw',
        height: '20vw'
    }
}));

export default function PageNotFound() {

    const classes = useStyles();

    return (
        <div className="Home">
            <Header />
            <div className={classes.content}>
                <div>
                    <h1 className={classes.text}> Page Not Found</h1>
                    <h3 className={classes.text}> Continue procurando</h3>
                </div>

                <img src={Lupa} alt="Lupa" className={classes.img}/>
            </div>
            <Footer />
        </div>
    );
}
