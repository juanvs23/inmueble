import React from 'react'
import { Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import { Icon } from '@material-ui/core';
import theme from '../../theme/theme'

const style = theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    grow: {
        flexGrow: 1
    },
    sectionMobile: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }
})

class BarSession extends React.Component {
    render() {
        const { classes } = this.props
        console.log(withStyles)
        return (
            <Toolbar>
            <IconButton color="inherit"><Icon>menu</Icon></IconButton>
                <Typography variant="h4">Hola</Typography>
                <div className={classes.grow}></div>
                <div className={classes.sectionDesktop}>
                 <Button color="inherit"> Login</Button>
                </div>
                 <div className={classes.sectionMobile}>
                    <IconButton color="inherit"><Icon>more_vert</Icon></IconButton>
                </div>
            </Toolbar>
        )
    }
}
export default withStyles(style)(BarSession)
