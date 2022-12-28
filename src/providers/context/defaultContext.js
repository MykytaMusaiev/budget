import {getFromStorage} from "../../utils/SessionStorage";
import {THEMES} from "../themes/themeList";

export default {
    currency: 'UAH',
    themeName: getFromStorage('themeName') || THEMES.LIGHT
}