import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['"Hind Madurai"', 'Lora', 'Montserrat'].join(','),
        h2: {
            fontFamily: 'Montserrat',
            fontWeight: 'bolder'
        },
        h4: {
            fontFamily: 'Lora',
            fontWeight: 'bold'
        },
        h5: {
            fontFamily: 'Lora',
        },
        h6: {
            fontFamily: 'Montserrat',
        }
    }
})

export default theme;