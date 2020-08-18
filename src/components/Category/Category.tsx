import React from 'react'
import {Card} from "@material-ui/core"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// Assets.
import {categoryStyle} from "./Category.style"
import general_knowledge from "./../images/gk-pic.png"
import "./Category.scss"

const Category = () => {
    const classes = categoryStyle()
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h6">General Knowledge</Typography>
                    <div>
                        <img className="image_container" src={general_knowledge} 
                            alt="General Knowledege" width={40} height={40} />
                    </div>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </div>    
    )
}

export default Category
