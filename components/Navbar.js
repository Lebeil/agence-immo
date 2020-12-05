
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: 'blue',
    },
    bar: {
        backgroundColor: 'transparent',
    },
    lien: {
        textDecoration: "none"
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Agence immo
                    </Typography>
                    <Link href="/properties">
                        <a className={classes.lien}>
                            <Typography variant="h6">
                                Liste des appartements
                            </Typography>
                        </a>
                    </Link>
                    <Button color="primary">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
