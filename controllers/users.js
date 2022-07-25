const { response, request } = require('express')



const userGet = (req = request, res = response) => {

    const params = req.query;

    res.json({
        'msg': 'get api',
        query
    })}

const userPost = (req, res = response) => {

    const body = req.body;

    res.json({
        'msg': 'post api',
        'body': body
    })}

const userPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        'msg': 'put api',
        'id': id
    })}

const userDel = (req, res = response) => {
    res.json({
        'msg': 'del api'
    })}

const userPatch = (req, res = response) => {
    res.json({
        'msg': 'patch api'
    })}


module.exports = {
    userDel,
    userGet,
    userPatch,
    userPost,
    userPut
}