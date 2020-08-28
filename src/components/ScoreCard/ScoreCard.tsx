import React, {useState} from 'react'
import {Grid} from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from "@material-ui/core/CardHeader"; 
import CardMedia from "@material-ui/core/CardMedia";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import {Replay} from "@material-ui/icons";
// Assets.
import "./ScoreCard.scss";
import {scoreCardStyles} from "./Score.style";
import congratulations from "./../animations/congratulations.gif";
import sad_because_failed from "./../animations/sad.gif";
// Components.
import CategoryList from "./../CategoryList/CategoryList";

type ScoreCardProps = {
   score: number;
   totalQuestions: number; 
}

const ScoreCard = ({score, totalQuestions}:ScoreCardProps) => {
    const [isCategoryList, setCategoryList] = useState(false)
    const classes = scoreCardStyles()
    console.log(`Score :${String(score)}`)
    console.log(`Total Questions: ${String(totalQuestions)}`)
    // After viewing Score board.
    const play_again = () => {
        setCategoryList(!isCategoryList);
    }
    if (isCategoryList) {
        return(<CategoryList />)
    }else {
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
                                            <CardActions className="card_actions">
                                                <Fab onClick={play_again}>
                                                    <IconButton>
                                                        <Replay/>
                                                    </IconButton>
                                                </Fab>
                                            </CardActions>
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
                                <CardActions className="card_actions">
                                    <Fab onClick={play_again}>
                                        <IconButton>
                                            <Replay/>
                                        </IconButton>
                                    </Fab>
                                </CardActions>
                            </Card>
                        </div>
                    </Grid>

                }
                </Grid>
            </div>
        ) 
    }
}

export default ScoreCard
