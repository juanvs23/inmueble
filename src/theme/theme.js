import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    typography: {
        userNextVariant: true
    },
    palette: {
        primary: {
            main: '#4287ff'
        },
        common: {
            white: '#fff'
        },
        secondary: {
            main: '#ff0008'
        }
    }
})
export default theme
