
const URL_BASE = "https://navigation-434ec-default-rtdb.europe-west1.firebasedatabase.app/";


export async function postUser(nome, cognome, email, telefono){

    const newUser = {nome, cognome, email, telefono};
    
    try {
    const response = await fetch(URL_BASE + ".json", {method: "POST", headers: {'Content-Type': 'application/json',}, body: JSON.stringify(newUser),});

    if (!response.ok) {
        throw new Error("HTTP Error status code: " + response.status);
    }
    const data = await response.json();
    return data;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getUsers(){
    try{
        const response = await fetch(URL_BASE + ".json");

        if(!response.ok){
            throw new Error("HTTP Error status code: " + response.status);
        }
        const data = await response.json();
        return Object.entries(data).map(([id, value]) => ({id, ...value}));

    } catch (error) {
        console.log(error);
        return null;   
    }
    }