import Axios from 'axios'
import { useState, useEffect } from 'react'
import _ from 'lodash'


const GITHUB_REPO_URL = "https://api.github.com/orgs/Ninja-Developers/repos"

const useRepo = () => {
    const [repos, setRepos] = useState([])
    const getRepos = () => {
        Axios({
            method: 'GET',
            url: GITHUB_REPO_URL
        }).then(res => {
            let { data } = res
            let own_repo = _.filter(data, o => !o.fork)
            setRepos(own_repo)
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