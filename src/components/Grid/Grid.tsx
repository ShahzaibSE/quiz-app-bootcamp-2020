import React from 'react'
import Grid from "@material-ui/core/Grid"
// Components.
import Header from "./../Header/Header"
import CategoryList from "./../CategoryList/CategoryList"
import "./Grid.scss"
// Context.
import {CategoryProvider} from "./../CategoryList/categories_context/Category.context"

const GridComponent = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Header />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                        <CategoryProvider> 
                            <CategoryList />
                        </CategoryProvider>
                </Grid>
            </Grid>
        </div>
    )
}

export default GridComponent
