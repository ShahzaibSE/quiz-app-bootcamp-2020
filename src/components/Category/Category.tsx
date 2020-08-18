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
                    <Typography variant="subtitle1" className={classes.card_heading}>General Knowledge</Typography>
                    <div>
                        <img className="image_container" src={general_knowledge} 
                            alt="General Knowledege" width={40} height={40} />
                    </div>
                </CardContent>
                <CardActions>
                    <Button className={classes.btn} variant="contained" color="secondary">Start</Button>
                </CardActions>
            </Card>
        </div>    
    )
}

export default Category
