import {useContext} from "react";
import {AppContext} from "../../providers/context";
import {useBooleanToggle} from '../../hooks'
import {LOCALES} from "../../providers/i18n";
import {saveToStorage} from "../../utils/SessionStorage";
import {FormattedMessage} from "react-intl";

const Settings = () => {
    const {state, dispatch} = useContext(AppContext)
    const {status, handleStatusChange} = useBooleanToggle()

    const onChange = (e) => {
        const {value} = e.target;
        dispatch({
            type: 'changeCurrency',
            currency: value
        })
    }

    const onChangeLocale = (e) => {
        const {value} = e.target;
        dispatch({
            type: 'setLocale',
            locale: value
        })
        saveToStorage('locale', value)
    }

    return (
        <>
            <h1>
                <FormattedMessage id='settings.title'/>
            </h1>
            <div>
                <form>
                    <div>
                        <label>
                            <FormattedMessage id="settings.currencyType"/>:
                            <select name="currency"
                                    onChange={onChange}
                                    value={state.currency}>
                                <option value="UAH">
                                    <FormattedMessage id="settings.UAH"/>
                                </option>
                                <option value="USD">
                                    <FormattedMessage id="settings.USD"/>
                                </option>
                                <option value="EUR">
                                    <FormattedMessage id="settings.EUR"/>
                                </option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label>
                            Мова:
                            <select name="locale"
                                    onChange={onChangeLocale}
                                    value={state.locale}>
                                <option value={LOCALES.UKRAINIAN}>Ураїнська</option>
                                <option value={LOCALES.ENGLISH}>English</option>
                            </select>
                        </label>
                    </div>
                </form>
            </div>

            <div>
                <button onClick={handleStatusChange}>
                    <FormattedMessage id="settings.advSettings"/>
                </button>

                {status ? (
                        <div>
                            <h2> <FormattedMessage id="settings.advSettings"/></h2>
                            <p>...</p>
                        </div>
                    )
                    : null}
            </div>
        </>
    )
}

export default Settings;