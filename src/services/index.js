import axios from 'axios';

let repos = () => {
    axios({
        method: "GET",
        url: "https://api.github.com/users/jmsgfhr/repos"
    }).then((response) => {
        console.log(response)
    })
}

export default repos;