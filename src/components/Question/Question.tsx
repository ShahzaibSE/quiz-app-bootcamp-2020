import React from 'react'
import Card from "@material-ui/core/Card"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// Assets.
import {questionStyles} from "./Question.style";
import "./Question.scss";

const Question = () => {
    const classes = questionStyles()
    return (
       <div> 
        <Card className={classes.root}>
            
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Question 1
                </Typography>
                <p>Options 1</p>
                <p>Options 2</p>
                <p>Options 3</p>
                <p>Options 4</p>
            </CardContent>

            <CardActions>
                <Button size="small">Next</Button>
            </CardActions>
        </Card>
      </div>  
    )
}

export default Question
