import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
    myContainer: {
        padding: '100px 50px'
    }
}))
function ListPodcasts() {
    const classes = useStyles();
    return <Container className={classes.myContainer} maxWidth='false'>

    </Container>
}
export default ListPodcasts;