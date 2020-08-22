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

const CategoryList = () => {
    const [isCardHover, setCardHover] = useState(false)
    const category_classes = categoryStyle()
    const {categories: {general_knowledge,
                        geogprahy, video_games, 
                        history, mathematics, computers}} = useContext(CategoryContext)  
    
    const onCardHoverEvent = () => {
        console.log("On Mouse Over on card.")
        setCardHover(!isCardHover)
    }
                                  
    return (
       <div className="category_list_container"> 
            <Grid container spacing={3}>
                {/* <Grid item sm={12} md={2} lg={2}>
                        <Category />
                </Grid>
                <Grid item sm={12} md={2} lg={2}>
                        <Category />
                </Grid> */}
                {/* {categories.map((category:any) => (
                    <Grid item sm={12} md={2} lg={2}>
                        <Category category={category}/>
                    </Grid>
                ))} */}
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
                            <Button className={category_classes.btn} variant="contained" color="secondary">
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
                            <Button className={category_classes.btn} variant="contained" color="secondary">
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
                            <Button className={category_classes.btn} variant="contained" color="secondary">
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
                            <Button className={category_classes.btn} variant="contained" color="secondary">
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
                            <Button className={category_classes.btn} variant="contained" color="secondary">
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
                            <Button className={category_classes.btn} variant="contained" color="secondary">
                                Start Quiz
                            </Button>
                        </CardActions>
                    </Card>
                   </AnimationWrapper> 
                </Grid>

            </Grid>
       </div> 
    )
}

export default CategoryList
