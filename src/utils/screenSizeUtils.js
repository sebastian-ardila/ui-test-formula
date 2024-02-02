import { MOBILE, TABLET } from "../constants/screenSizes";
import { LIST, CAROUSEL, GRID } from "../constants/viewModes";
import { MOBILE_LIST, DESKTOP_LIST, CARD } from "../constants/cardVariants";

export const getClassFromType = (type, isMobile) => {
    if(isMobile) return CAROUSEL;
    return type.toLowerCase() === LIST ? LIST : GRID;
}

export const getVariant = (currentScreenWidth, type) => {
    if (currentScreenWidth <= MOBILE.size) return CARD;
    if (currentScreenWidth <= TABLET.size) return type === LIST ? MOBILE_LIST : CARD;
    if (currentScreenWidth > TABLET.size) return type === LIST ? DESKTOP_LIST : CARD;
};

export const isMobile = (currentScreenWidth) => MOBILE.size > currentScreenWidth;;