import Airtable from 'airtable'
import { useState, useEffect } from 'react'
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(process.env.REACT_APP_EVENT_BASE)

const useEvents = () => {
    const [data, setData] = useState([])
    const [dates, setDates] = useState([])

    const getData = async () => {
        base('Events').select({
            view: 'Grid view',
            sort: [{ field: 'date', direction: 'asc' }]
        }).firstPage().then(result => {
            setData(result)
        }).catch(err => {
            throw err
        })
    }

    const getDates = async () => {
        base('Events').select({
            view: 'Grid view',
            fields: ["date"],
            sort: [{ field: 'date', direction: 'asc' }]
        }).firstPage().then(result => {
            setDates(result)
        }).catch(err => {
            throw err
        })
    }

    useEffect(() => {
        getData()
        getDates()
    }, [])

    return [data, dates]
}

const useRsvp = (name, eventId, email) => {

    const [data, setData] = useState(false)

    const rsvp = async () => {
        base('rsvp').create([
            {
                "fields": {
                    "name": name,
                    "event": [eventId],
                    "email": email
                }
            }
        ]).then(records => {
            setData(true)
        }).catch(err => {
            throw err
        })
    }

    useEffect(() => {
        rsvp()
    }, [])

    return data
}

export default { useEvents, useRsvp }