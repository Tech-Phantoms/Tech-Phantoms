const OS = require('../os.org');
const { API_BASE_URL } = require('../../../constants');


test('our Publis repos', async () => {
    let os = new OS(API_BASE_URL);
    try {
        let data = os.publicRepos();
        expect(data).toBeTruthy();
    } catch (error) {
        throw error;
    }
})