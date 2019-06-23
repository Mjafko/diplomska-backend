import KcAdminClient from 'keycloak-admin'


async function getUsers() {
    const keycloakAdminClient = new KcAdminClient()

    try {
        await keycloakAdminClient.auth({
            username: 'admin',
            password: 'admin',
            grantType: 'password',
            clientId: 'admin-cli',
        })
    } catch ( e ) {
        console.log( 'Error --->', e )
    }

    keycloakAdminClient.setConfig({
        realmName: 'diplomski-project',
    });
    
    try {
        return await keycloakAdminClient.users.find()
    } catch ( e ) {
        console.log( 'Error --->', e )
    }
}

async function editUser( userId, objectToUpdate ) {
    const keycloakAdminClient = new KcAdminClient()

    try {
        await keycloakAdminClient.auth({
            username: 'admin',
            password: 'admin',
            grantType: 'password',
            clientId: 'admin-cli',
        })
    } catch ( e ) {
        console.log( 'Error --->', e )
    }

    keycloakAdminClient.setConfig({
        realmName: 'diplomski-project',
    });

    try {
        await keycloakAdminClient.users.update(
            { id: userId },
            objectToUpdate
        )
    } catch ( e ) {
        console.log( 'Error --->', e )
    }
}

export {
    getUsers,
    editUser
}