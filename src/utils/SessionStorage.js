export const saveToStorage = (name, data) => {
    if (!window || !window.localStorage) {
        return null;
    }

    window.localStorage.setItem(name, JSON.stringify(data))
};

export const getFromStorage = (name) => {
    if (!window || !window.localStorage) {
        return null;
    }
    try{
        return JSON.parse(window.localStorage.getItem(name));
    }catch(e){
        console.error(e);
        return null;
    }
}