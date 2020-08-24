import React, {useState,useContext} from 'react'
import {Grid, Card} from "@material-ui/core"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {AnimationWrapper} from "react-hover-animation"
// Assets
import "./CategoryList.scss"
import {categoryStyle} from "./CateogoryList.style"
// Context.
import {CategoryContext} from "./categories_context/Category.context"
// Components.
import Quiz from "./../Quiz/Quiz"

const CategoryList = () => {
    const [isQuiz, setQuiz] = useState(false)
    const [categoryNumber, setCategoryNumber] = useState(0)
    const category_classes = categoryStyle()
    const {categories: {general_knowledge,
                        geogprahy, video_games, 
                        history, mathematics, computers}} = useContext(CategoryContext)  


    const start_quiz = (category:any) => {
        console.log(`Category Name: ${category}`)
        if (category == "General Knowledge"){
            setCategoryNumber(general_knowledge.id)
            setQuiz(!isQuiz)
        }
        if(category == "Geography"){
            setCategoryNumber(geogprahy.id)
            setQuiz(!isQuiz)
        } 
        if(category == "Video Games"){
            setCategoryNumber(video_games.id)
            setQuiz(!isQuiz)
        } 
        if(category == "History"){
            setCategoryNumber(history.id)
            setQuiz(!isQuiz)
        } 
        if(category == "Mathematics"){
            setCategoryNumber(mathematics.id)
            setQuiz(!isQuiz)
        } 
        if(category == "Computers"){
            setCategoryNumber(computers.id)
            setQuiz(!isQuiz)
        } 
    }

    if (isQuiz) {
        return(
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Quiz category={categoryNumber}/>
                </Grid>
            </Grid>
        )
    }else{
                                  
        return (
        <div>   
            <div className="difficulty_container">
                <Grid container spacing={2}>
                    <Grid item sm={12} md={4} lg={4}>
                        <Button className="button_dimensions" variant="outlined" color="primary">EASY</Button>
                    </Grid>
                    <Grid item sm={12} md={4} lg={4}>
                        <Button className="button_dimensions" variant="outlined" color="secondary">MEDIUM</Button>
                    </Grid>
                    <Grid item sm={12} md={4} lg={4}>
                        <Button className="button_dimensions" variant="outlined" color="secondary">HARD</Button>
                    </Grid>
                </Grid>
            </div>    
            <div className="category_list_container"> 
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={2} lg={2}>
                            <AnimationWrapper config={{
                                        transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                        opacity: {initial:'1',onHover:'1'}
                                    }}>
                            <Card className={category_classes.root}>
                                <CardContent>
                                    <Typography variant="subtitle1" className={category_classes.card_heading}>
                                                {general_knowledge.name}</Typography>
                                    <div>
                                        <img className="image_container" src={general_knowledge.image} 
                                            alt="General Knowledege" width={40} height={40} />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button className={category_classes.btn} variant="contained" color="secondary"
                                            onClick={()=>{start_quiz('General Knowledge')}}>
                                        Start Quiz
                                    </Button>
                                </CardActions>
                            </Card>
                            </AnimationWrapper>
                        </Grid>

                        <Grid item sm={12} md={2} lg={2}>
                            <AnimationWrapper config={{
                                            transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                            opacity: {initial:'1',onHover:'1'}
                                        }}>
                            <Card className={category_classes.root}>
                                <CardContent>
                                    <Typography variant="subtitle1" className={category_classes.card_heading}>
                                                {geogprahy.name}</Typography>
                                    <div>
                                        <img className="image_container" src={geogprahy.image} 
                                            alt="Geography" width={40} height={40} />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button className={category_classes.btn} variant="contained" color="secondary"
                                    onClick={()=>{start_quiz('Geography')}}>
                                        Start Quiz
                                    </Button>
                                </CardActions>
                            </Card>
                        </AnimationWrapper> 
                        </Grid>

                        <Grid item sm={12} md={2} lg={2}>
                            <AnimationWrapper config={{
                                            transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                            opacity: {initial:'1',onHover:'1'}
                                        }}>
                            <Card className={category_classes.root}>
                                <CardContent>
                                    <Typography variant="subtitle1" className={category_classes.card_heading}>
                                                {video_games.name}</Typography>
                                    <div>
                                        <img className="image_container" src={video_games.image} 
                                            alt="Video Games" width={40} height={40} />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button className={category_classes.btn} variant="contained" color="secondary"
                                    onClick={()=>{start_quiz('Video Games')}}>
                                        Start Quiz
                                    </Button>
                                </CardActions>
                            </Card>
                        </AnimationWrapper> 
                        </Grid>
                        <Grid item sm={12} md={2} lg={2}>
                        <AnimationWrapper config={{
                                        transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                        opacity: {initial:'1',onHover:'1'}
                                    }}>
                            <Card className={category_classes.root}>
                                <CardContent>
                                    <Typography variant="subtitle1" className={category_classes.card_heading}>
                                                {history.name}</Typography>
                                    <div>
                                        <img className="image_container" src={history.image} 
                                            alt="History" width={40} height={40} />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button className={category_classes.btn} variant="contained" color="secondary"
                                    onClick={()=>{start_quiz('History')}}>
                                        Start Quiz
                                    </Button>
                                </CardActions>
                            </Card>
                        </AnimationWrapper> 
                        </Grid>

                        <Grid item sm={12} md={2} lg={2}>
                            <AnimationWrapper config={{
                                            transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                            opacity: {initial:'1',onHover:'1'}
                                        }}>
                            <Card className={category_classes.root}>
                                <CardContent>
                                    <Typography variant="subtitle1" className={category_classes.card_heading}>
                                                {mathematics.name}</Typography>
                                    <div>
                                        <img className="image_container" src={mathematics.image} 
                                            alt="Mathematics" width={40} height={40} />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button className={category_classes.btn} variant="contained" color="secondary"
                                    onClick={()=>{start_quiz('Mathematics')}}>
                                        Start Quiz
                                    </Button>
                                </CardActions>
                            </Card>
                        </AnimationWrapper> 
                        </Grid>

                        <Grid item sm={12} md={2} lg={2}>
                            <AnimationWrapper config={{
                                            transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                            opacity: {initial:'1',onHover:'1'}
                                        }}>
                            <Card className={category_classes.root}>
                                <CardContent>
                                    <Typography variant="subtitle1" className={category_classes.card_heading}>
                                                {computers.name}</Typography>
                                    <div>
                                        <img className="image_container" src={computers.image} 
                                            alt="Computers" width={40} height={40} />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button className={category_classes.btn} variant="contained" color="secondary"
                                    onClick={()=>{start_quiz('Computers')}}>
                                        Start Quiz
                                    </Button>
                                </CardActions>
                            </Card>
                        </AnimationWrapper> 
                        </Grid>

                    </Grid>
            </div>
        </div> 
        )
        }
}

export default CategoryList
