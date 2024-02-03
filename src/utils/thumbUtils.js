import { UP, DOWN, TEAL, YELLOW } from "../constants/thumbConstants";

export const getThumbsBackgroundColor = (background, state) => {
    if(background) return background;
    return state === UP ? TEAL:YELLOW;
}

export const getThumbState = (positives, negatives) => {
    if(positives > negatives) return UP;
    if(positives < negatives) return DOWN;
}