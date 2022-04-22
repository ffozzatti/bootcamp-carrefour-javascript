// MAP

function getAdmins (map) {
    let admins = []
    for([key, value] of map){
        // Se o VALUE for igual ao Admin, retornar o resultado
        if (value === 'Admin'){
            admins.push(key)
        }

    }
    return admins
}

const usuarios = new Map()

//Primeiro vem KEY depois o VALUE

usuarios.set('Luiz', 'Admin')
usuarios.set('Felipe', 'Admin')
usuarios.set('Jorge', 'User')
usuarios.set('Natalia', 'Admin')


console.log (getAdmins(usuarios))