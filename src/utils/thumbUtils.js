import { UP, TEAL, YELLOW } from "../constants/thumbConstants";

export const getThumbsBackgroundColor = (background, state) => {
    if(background) return background;
    return state === UP ? TEAL:YELLOW;
}