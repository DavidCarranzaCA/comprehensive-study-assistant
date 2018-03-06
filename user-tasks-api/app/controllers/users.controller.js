const userServices = require('../services/user.services')
const responses = require('../models/responses')


module.exports = {
    getAll: _getAll,
    create: _create,
    update: _update,
    delete: _delete
}


function _getAll(req, res) {
    userServices.readAll()
        .then(users => {
            res.json(new responses.ItemsResponse(users))
        })
        .catch(err => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function _create(req, res) {
    userServices.create(req.body)
        .then(result => {
            res.json(new responses.ItemResponse(result))
        })
        .catch(err => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function _update(req, res) {
    userServices.update(req.params.id)
        .then(user => {
            res.status(200).json(new responses.SuccessResponse())
        })
        .catch(err => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function _delete(req, res) {
    userServices.delete(req.params.id)
        .then(user => {
            res.status(200).json(new responses.SuccessResponse())
        })
        .catch(err => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}