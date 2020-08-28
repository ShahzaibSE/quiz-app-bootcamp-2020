import React from 'react'
import {Grid} from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from "@material-ui/core/CardHeader"; 
import CardMedia from "@material-ui/core/CardMedia";
// Assets.
import "./ScoreCard.scss"
import {scoreCardStyles} from "./Score.style"
import congratulations from "./../animations/congratulations.gif"
import sad_because_failed from "./../animations/sad.gif"

type ScoreCardProps = {
   score: number;
   questionNum: number;
   totalQuestions: number; 
}

const ScoreCard = ({score, totalQuestions}:ScoreCardProps) => {
    const classes = scoreCardStyles()
    //
    return(
        <div className="scorecard_container">
        <Grid container justify="center" alignItems="center"> 
            {
                score >= 5 ? 
                <Grid item xs={12} sm={12} md={6} lg={6}>
                                <div className="scorecard_item_container">
                                    <Card>
                                        <CardHeader title="Scorecard"></CardHeader>
                                        <CardContent>
                                            <CardMedia
                                                    className={classes.media}
                                                    image={congratulations}
                                                    title="Congratulations"
                                                />
                                        </CardContent>
                                    </Card>
                                </div>
                </Grid> 
                    :
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="scorecard_item_container">
                        <Card>
                            <CardHeader title="Scorecard"></CardHeader>
                            <CardContent>
                                <CardMedia
                                        className={classes.media}
                                        image={sad_because_failed}
                                        title="Congratulations"
                                    />
                            </CardContent>
                        </Card>
                    </div>
                </Grid>

            }
            </Grid>
        </div>
    ) 
}

export default ScoreCard
