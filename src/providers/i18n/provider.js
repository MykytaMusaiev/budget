import React, {useContext} from 'react';
import {AppContext} from "../context";
import messages from "./messages";
import { LOCALES } from './constants'
import {IntlProvider} from "react-intl";
import flatten from "flat";

// react-intl не працює з рівнями вкладеності, тому за допомогою бібліотеки flaten передаємо messages рядком, без вкладеності.

const IntlAppProvider = ({children}) => {
    const {state} = useContext(AppContext)
    return(
        <IntlProvider messages={flatten(messages[state.locale])} locale={state.locale} defaultLocale={LOCALES.ENGLISH}>
            {children}
        </IntlProvider>
    )
}

export default IntlAppProvider;