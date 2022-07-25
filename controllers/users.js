
const { response, request } = require('express')
const bcrypt = require('bcryptjs')

const User = require('../models/user');



const userGet = async(req = request, res = response) => {

    const params = req.query;

    res.json({
        'msg': 'get api',
        query
    })}

const userPost = async(req, res = response) => {


    const { nombre, email, passw, role} = req.body;
    const user = new User({ nombre, email, passw, role});

    const existEmail = await User.findOne({ email });
    if(existEmail){
        return res.status(400).json({
            msg: 'Email ya esta registrado'
        });
    }

    const salt = bcrypt.genSaltSync();
    user.passw = bcrypt.hashSync( passw, salt);

    await user.save();

    res.json({
        user
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