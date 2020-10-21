import { createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: grey[900],
            light: grey[900]
        }
    },
    typography: {
        fontFamily: ['"Hind Madurai"', 'Lora', 'Montserrat'].join(','),
        h2: {
            fontFamily: 'Montserrat',
            fontWeight: 'bolder'
        },
        h4: {
            fontFamily: 'Lora',
            fontWeight: 'bold'
        }
    }
})

export default theme;