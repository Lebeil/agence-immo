import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {priceFormatted} from "../helpers/format";

const useStyles = makeStyles({
    root: {
        maxWidth: 380,
        margin: 'auto',
        width: '100%',
        marginTop: 50,
    },
    grid: {
        flexGrow: 1,
    },
    media: {
        height: 200,
    },
    zone: {
        backgroundColor: '#F5F5F5',
        width: '100%',
        marginTop: 50,
        paddingBottom: 50
    },
    title: {
        textAlign: 'center',
        paddingTop: 20,
    },
    button: {
        paddingTop: 30,
        width: 200,
        margin: 'auto'
    }
});

export const PropertyList = ({ properties }) => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="xl" className={classes.zone}>
                <Typography variant="h2" className={classes.title}>Notre catalogue</Typography>
                <Grid container className={classes.grid} spacing={2}>
                    <Grid container item xs={12}>
                        {properties && properties.map((property) => (
                            <Card className={classes.root} key={property._id}>
                                <CardActionArea>
                                    <CardMedia className={classes.media}>
                                        <img src={property.pictures[0]} alt={property.title} width={380} height={200}/>
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {property.title}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <strong>{priceFormatted(property.price)}</strong>
                                        </Typography>
                                        {/*<Typography variant="body2" color="textSecondary" component="p">
                                            {property.description}
                                        </Typography>*/}
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Grid>

                </Grid>
                <div className={classes.button}>
                    <Button variant="contained" color="primary"  disableElevation>
                        Afficher plus ...
                    </Button>
                </div>



            </Container>


        </>
    );
}
