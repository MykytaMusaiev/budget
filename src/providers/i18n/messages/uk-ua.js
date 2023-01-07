import {LOCALES} from "../constants";

export default {
    [LOCALES.UKRAINIAN]: {
        hello: 'Привіт, Світе!',
        menu: {
            home: 'Бюджет',
            settings: 'Налаштування',
            statistics: 'Статистика',
            about: 'Про додаток'
        },
        themes: {
            light: 'Світла',
            dark: 'Темна',
        },
        form: {
            currBalance: 'Поточний Баланс',
            saveButton: 'Зберегти',
            placeholder: 'Сумма'
        },
        settings: {
            title: 'Налаштування',
            currencyType: 'Валюта',
            UAH: 'Гривня',
            USD: 'Доллар',
            EUR: 'Євро',
            advSettings: 'Розширенні налаштування',
        },
        statistics: {
            title: 'Сторінка статистики',
        },
        about: {
            title: 'Про додаток'
        }
    }
}