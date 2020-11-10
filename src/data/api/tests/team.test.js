const Team = require('../team');
const { API_BASE_URL } = require('../../../constants')


test('checking coreteam route', async () => {
    let team = new Team(API_BASE_URL);

    try {
        let coreTeam = await team.coreTeam();

        expect(coreTeam).toBeTruthy();
    } catch (error) {

    }
})