import {useContext} from "react";
import {AppContext} from "../../providers/context";
import { useBooleanToggle } from '../../hooks'

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

    return (
        <>
            <h1>Налаштування</h1>
            <div>
                <form>
                    <label>
                        Валюта:
                        <select name="currency"
                                onChange={onChange}
                                value={state.currency}>
                            <option value="UAH">Гривня</option>
                            <option value="USD">Доллар США</option>
                            <option value="EUR">Євро</option>
                        </select>
                    </label>
                </form>
            </div>

            <div>
                <button onClick={handleStatusChange}>Розширенні налаштування</button>

                {status ? (
                        <div>
                            <h2>Розширенні налаштування</h2>
                            <p>...</p>
                        </div>
                    )
                    : null}
            </div>
        </>
    )
}

export default Settings;