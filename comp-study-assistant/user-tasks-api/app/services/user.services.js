const mongodb = require('../mongodb')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId


module.exports = {
    readAll: _readAll,
    create: _create,
    update: _update,
    delete: _delete
}


function _readAll() {
    return conn.db().collection('users').find()
        .map(users => {
            return users
        })
        .toArray()
}

function _create(body) {
    return conn.db().collection('users').insertOne(body)
        .then(result => result.insertedId.toString())
}

function _update(id, body) {
    return conn.db().collection('users').updateOne({_id: new ObjectId(id)}, body)
        .then(result => Promise.resolve())
}

function _delete(id) {
    return conn.db().collection('users').deleteOne({_id: new ObjectId(id)})
        .then(result => Promise.resolve())
}