import React from 'react'
import Grid from "@material-ui/core/Grid"
// Components.
import Header from "./../Header/Header"

const GridComponent = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                    <Header />
                </Grid>
            </Grid>
        </div>
    )
}

export default GridComponent
