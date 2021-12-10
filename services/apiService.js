import GET_USER from "../api";

const headers = new Headers({'Accept': 'application/vnd.github.v3+json'});

export const getUserInfo = (user) => {
    let username = user.toLowerCase().trim();
    const URL = `${GET_USER}/${username}`;
    return fetch(URL, {headers, method:'GET'}).then((res) => res.json);
}
