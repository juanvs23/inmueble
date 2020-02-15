import React, { Component } from 'react'
import { AppBar } from '@material-ui/core';
import BarSession from './barsession'


export default class AppNavbar extends Component {
    render() {
        return (
            <AppBar position="static">
                <BarSession/>
            </AppBar>
        )
    }
}
