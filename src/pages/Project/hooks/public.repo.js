import { useEffect, useState } from 'react';
import Axios from 'axios';

const URL = "https://apitechphantoms.azurewebsites.net/os/public_repos"

const usePublicRepo = () => {
    let [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            let res = await Axios({
                method: 'GET',
                url: URL
            });

            setData(res.data);

        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return data
}

export default usePublicRepo;