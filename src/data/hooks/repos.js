import Axios from 'axios'
import { useState, useEffect } from 'react'
import _ from 'lodash'


const GITHUB_REPO_URL = "https://api.github.com/orgs/Ninja-Developers/repos"

const useRepo = () => {
    const [repos, setRepos] = useState([])
    const getRepos = async () => {

        let res = await Axios({
            method: 'GET',
            url: GITHUB_REPO_URL
        })

        let {data} = res

        let own_repo = _.filter(data, o=>!o.fork)

        let P = Promise.all(own_repo.map(async (el) => {
            
            let d = {
                created: el.created_at,
                name: el.name,
                language: el.language,
                issueCount: el.open_issues,
                stars: el.stargazers_count,
                description: el.description,
                issueUrl: el.html_url + '/issues'
            }

            return d
        }))

        let temp_repo = await P

        setRepos(temp_repo)
        
    }

    useEffect(() => {
        getRepos()
    }, [])


    return repos
}

export { useRepo }