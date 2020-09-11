import Airtable from 'airtable'
import { useState, useEffect } from 'react'

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(process.env.REACT_APP_TEAM_BASE)



const useTeam = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        base("core_team").select({
            view: "Grid view"
        }).firstPage().then(result => {
            setData(result)
        }).catch(err => {
            throw err
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return data
}

export default { useTeam }