import React, {createContext, useReducer} from "react"
import category_app_reducer from "./Category.reducer"
// Data.
import general_knowledge from "./../../images/gk-pic.png"
import geography_pic from "./../../images/geography-pic.png"
import history_pic from "./../../images/history-pic.png"
import mathematics_pic from "./../../images/mathematics-pic.png"
import video_game_pic from "./../../images/video-games-pic.png"
import computer_pic from "./../../images/computer-pic.png"

const categories: any = [
    {name:"General Knowledge", image: general_knowledge},
    {name:"Geography", image: geography_pic},
    {name:"History", image: history_pic},
    {name:"Video Games", image: video_game_pic},
    {name:"Mathematics", image: mathematics_pic},
    {name:"Computers", image: computer_pic}
]

const initialState = {
    categories
}

export const CategoryContext = createContext(initialState)

export const CategoryProvider = (props:any) => {
    const [state, dispatch] = useReducer(category_app_reducer, initialState)

    return(
        <CategoryContext.Provider value={
            {
                categories: state.categories
            }
        }
        >
            {props.children}
        </CategoryContext.Provider>
    )  
}
