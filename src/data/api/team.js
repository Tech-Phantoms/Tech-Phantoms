const axios = require('axios').default

class Team {
    constructor(base_url) {
        this.BASE_URL = base_url;
    }

    async coreTeam() {
        try {
            let res = await axios({
                method: 'GET',
                url: this.BASE_URL + '/team/coreteam'
            });

            return res.data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Team;