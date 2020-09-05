import Airtable from 'airtable'
import { useState, useEffect } from 'react'

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(process.env.REACT_APP_EVENT_BASE)

const useEvents = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        base('Events').select({
            view: 'Grid view'
        }).firstPage().then(result => {
<<<<<<< HEAD
            setData(result.map(el => el.fields))
=======
            setData(result)
>>>>>>> upstream/master
        }).catch(err => {
            throw err
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return data
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