import React from 'react';
import './styles.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import UnityLogo from '../../Assets/images/unity.jpg'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '25vw'
    },
    text: {
        justifyContent: 'center',
        textDecoration: 'none',
        color: 'white',
        paddingLeft: '20vw',
        paddingRight: '20vw'
    },
    img: {
        
        justifyContent: 'center',
        width: '15vw',
        paddingLeft: '40vw',
        paddingRight: '40vw'
    }
}));


export default function Home() {

    const classes = useStyles();
    
    return (
        <div className="Home">
            <Header />
            <div className={classes.root}>

                <img src={UnityLogo} alt="Unity" className={classes.img}/>
                <h3 className={classes.text} >Comece a dar vida para suas ideias hoje mesmo com a plataforma de desenvolvimento 3D em tempo real do Unity. </h3>
                <h3 className={classes.text} >Ferramentas para criação e desenvolvimento, desde ambientes 3D em jogos a edição de som automotivo!</h3>
            </div>
            <Footer />
        </div>
    );
}
