import React from 'react'
import {Grid} from "@material-ui/core"
// Components.
import Category from "./../Category/Category"
import "./CategoryList.scss"

const CategoryList = () => {
    return (
       <div className="category_list_container"> 
            <Grid container spacing={3}>
                <Grid item xs={12} md={2} lg={2}>
                        <Category />
                </Grid>
                <Grid item xs={12} md={2} lg={2}>
                        <Category />
                </Grid>
            </Grid>
       </div> 
    )
}

export default CategoryList
