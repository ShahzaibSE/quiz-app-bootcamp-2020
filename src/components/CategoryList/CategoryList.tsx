import React, {useContext} from 'react'
import {Grid} from "@material-ui/core"
// Components.
import Category from "./../Category/Category"
import "./CategoryList.scss"
// Context.
import {CategoryContext} from "./categories_context/Category.context"

const CategoryList = () => {
    const {categories} = useContext(CategoryContext)
    console.log("Categories")
    console.log(categories)
    return (
       <div className="category_list_container"> 
            <Grid container spacing={3}>
                <Grid item sm={12} md={2} lg={2}>
                        <Category />
                </Grid>
                <Grid item sm={12} md={2} lg={2}>
                        <Category />
                </Grid>
            </Grid>
       </div> 
    )
}

export default CategoryList
