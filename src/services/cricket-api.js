const API_KEY = "xHWXQCd1fEdSRsz0vCClFrJuVDB2";

export const getCricketMatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
}
export const getCricketMatchDetails = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));

}