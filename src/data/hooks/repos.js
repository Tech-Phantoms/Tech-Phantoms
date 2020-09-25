import Axios from 'axios'
import { useState, useEffect } from 'react'



const GITHUB_REPO_URL = "https://api.github.com/orgs/Ninja-Developers/repos"

const useRepo = () => {
    const [repos, setRepos] = useState([])
    const getRepos = () => {
        Axios({
            method: 'GET',
            url: GITHUB_REPO_URL
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getRepos()
    }, [])


    return repos
}


export { useRepo }