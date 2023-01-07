import React, {useContext} from "react";
import {AppContext} from "../../providers/context";
import {THEMES} from "../../providers/themes/themeList";
import {saveToStorage} from "../../utils/SessionStorage";
import {FormattedMessage} from "react-intl";

export const ThemeSwitch = () => {
    const {dispatch} = useContext(AppContext)
    const setTheme = (themeName) => {
        dispatch({
            type: 'setTheme',
            themeName
        });
        saveToStorage( 'themeName',themeName)

    }
    return(
        <>
            <button onClick={() => setTheme(THEMES.LIGHT)}>
                <FormattedMessage id="themes.light"/>
            </button>
            <button onClick={() => setTheme(THEMES.DARK)}>
                <FormattedMessage id="themes.dark"/>
            </button>
        </>
    )
}