import GET_USER from "../api";

export const getUserInfo = (user) => {
    let username = user.toLowerCase().trim();
    const URL = `${GET_USER}/${username}`;
    return fetch(URL).then((res) => res.json);
}
