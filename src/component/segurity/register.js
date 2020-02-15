import React from 'react'
import { Container, Typography, Grid, TextField, Avatar, Button, Icon } from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

const style = {
    paper: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: 8,
        backgroundColor: 'red'
    },
    registerForm: {
        width: '100%',
        marginTop: 16
    },
    Sending: {
        display: 'flex',
        flexDirection: 'row',
        width: '250px',
        margin: 'auto',
        marginTop: 20
    },
}
class Register extends React.Component {
    state = {
        usuario: {
            nombre: '',
            apellido: '',
            email: '',
            password: ''
        },

        nombreE: '',
        apellidoE: '',
        emailE: '',
        passwordE: '',
        stop: false



    }
    clearNombre = () => {
        this.setState({
            nombreE: '',
            stop: false
        })
    }
    clearApellido = () => {
        this.setState({
            apellidoE: '',
            stop: false
        })
    }
    clearEmail = () => {
        this.setState({
            emailE: '',
            stop: false
        })
    }
    clearPass = () => {
        this.setState({
            passwordE: '',
            stop: false
        })
    }

    handlerChange = e => {
        let usuario = Object.assign({}, this.state.usuario)
        usuario[e.target.name] = e.target.value
        this.setState({ usuario: usuario, })
    }



    handlerSubmit = (e) => {
        e.preventDefault()

        let { nombre, apellido, email, password } = this.state.usuario,
            testEmail = /^@/.test(email)





        if (nombre === "") {
            this.setState({
                nombreE: 'Campo requerido',
                stop: true
            })

        }
        if (apellido === "") {
            this.setState({
                apellidoE: 'Campo requerido',
                stop: true
            })

        }

        if (email === "") {
            this.setState({
                emailE: 'Campo requerido',
                stop: true
            })
        }
        else if (!testEmail) {
            this.setState({
                emailE: 'Formato de correo invalido',
                stop: true
            })
        }
        if (password === "") {
            this.setState({
                passwordE: 'Campo requerido',
                stop: true
            })
        }



    }

    render() {
        let { nombre, apellido, email, password } = this.state.usuario, {
                nombreE,
                apellidoE,
                emailE,
                passwordE,
                stop
            } = this.state,
            alertNombre = nombreE === "" ? false : true,
            alertApellido = apellidoE === "" ? false : true,
            alertEmail = emailE === "" ? false : true,
            alertPassword = passwordE === "" ? false : true;


        return (<Container maxWidth="md">
                    <div style={style.paper}>
                        <Avatar style={style.avatar}>
                            <LockOpenOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5" >Registre su cuenta</Typography>
                        <form style={style.registerForm} onSubmit={this.handlerSubmit} noValidate>
                            <Grid container spacing={2} >
                                <Grid item md={6} xs={12}>
                                <TextField id="nombreRegistrar" fullWidth={true}   error={alertNombre} onFocus={this.clearNombre} value={nombre}  helperText={nombreE}  onChange={this.handlerChange} label="Ingrese su nombre" name="nombre" />
                                </Grid>
                                 <Grid item md={6} xs={12}>
                                <TextField id="apellidoRegistrar" error={alertApellido}  onFocus={this.clearApellido} fullWidth={true} value={apellido}  helperText={apellidoE} onChange={this.handlerChange} label="Ingrese su apellido" name="apellido" />
                                </Grid> 
                                 <Grid item md={6} xs={12}>
                                <TextField id="Correo" error={alertEmail} fullWidth={true} onFocus={this.clearEmail} onChange={this.handlerChange} value={email} type="email" helperText={emailE} label="Correo electronico" name="email" />
                                </Grid> 
                                 <Grid item md={6} xs={12}>
                                <TextField id="password" fullWidth={true} type="password" onFocus={this.clearPass} error={alertPassword}  value={password} helperText={passwordE} onChange={this.handlerChange} label="Contraseña"  name="password" />
                                </Grid> 
                                 <Grid item xs={12}>
                                    <Grid container justify="center"  >
                                        <Grid item  xs={12}>
                                            <Button variant="contained" color="primary"  style={style.Sending}    endIcon={<Icon>send</Icon>}    size="large"    type="submit">
                                                Registrar
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid> 
                                
                            </Grid>
                        </form>
                    </div>
                </Container>)
    }
}
export default Register
