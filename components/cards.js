import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import {priceFormatted} from "../helpers/format";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: 30
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        width: 800,
    },
    cover: {
        width: 550,
        margin: 15,
        boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)',
        border: '1px solid rgba(0,0,0,.125)',
        backgroundColor: '#fff'
    }
}));


export const Cards = ({properties}) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            {properties && properties.map((property)=> (
                <Card className={classes.root} key={property._id}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <div className={classes.controls}>
                                <IconButton>
                                    <AccountBalanceIcon style={{marginRight: '10px'}}/>
                                    {property.category.name}
                                </IconButton>
                            </div>
                            <Typography component="h5" variant="h5">
                                {property.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {property.description.slice(0,250)}
                            </Typography>
                            <Typography component="h5" variant="h5" style={{marginTop: 10}}>
                                <strong>{priceFormatted(property.price)}</strong>
                            </Typography>
                            <IconButton>
                                <LocationOnIcon/>
                                {property.city}
                            </IconButton>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={property.pictures[0]}
                        title={property.title}
                    />
                </Card>
            ))}

        </>
    );
};

