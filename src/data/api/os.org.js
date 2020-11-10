const axios = require('axios').default

class OS {
    constructor(base_url) {
        this.BASE_URL = base_url;
    }
    async publicRepos() {
        try {
            let res = await axios({
                url: this.BASE_URL + '/os/public_repos',
                method: 'GET'
            });

            return res.data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OS