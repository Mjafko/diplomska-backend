"use strict"
import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { getUsers, editUser } from './keycloak'

const app = express()
const port = 3001

app.use( cors() )

app.use( bodyParser.json() );

app.get( '/', async( req, res ) => {
    res.send( 'Diplomski projekt' ) 
} )

app.get( '/users', async( req, res ) => {
    res.send( await getUsers() ) 
} )

app.post( '/edit-user/:id/', async( req, res ) => {
    const objectToUpdate = {
        firstName: req.body.firstName,
        lastName: req.body.firstName
    }
    await editUser( req.params.id, objectToUpdate )
    res.send( 'User updated' )
})

app.listen( port, 
    () => console.log( `Backend is listening on port ${ port }` ) 
)