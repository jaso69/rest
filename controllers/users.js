
const { response, request } = require('express')
const bcrypt = require('bcryptjs')

const User = require('../models/user');
const { existEmail } = require('../helpers/db-validators');



const userGet = async(req = request, res = response) => {

    const { limite = 5, from = 0 } = req.query;

    /*const usuarios = await User.find({ estado: true})
        .skip( Number(from) ) //desde registro
        .limit(Number(limite)); // numero de usuarios

    const total = await User.countDocuments(); //Todos
    const totalActivos = await User.countDocuments({ estado: true}); //Activos */

    const [total, activos, users] = await Promise.all([
        User.countDocuments(), //Todos
        User.countDocuments({ estado: true}), //Activos
        User.find({ estado: true})
                .skip( Number(from) )
                .limit(Number(limite))
    ])

    res.json({
        total,
        activos,
        users
    })}



const userPost = async(req, res = response) => {


    const { nombre, email, passw, role} = req.body;
    const user = new User({ nombre, email, passw, role});

    const salt = bcrypt.genSaltSync();
    user.passw = bcrypt.hashSync( passw, salt);

    await user.save();

    res.json({
        user
    })}



const userPut = async(req, res = response) => {

    const id = req.params.id;
    const{ _id, passw, google, ...resto} = req.body;

    if( passw ){
        const salt = bcrypt.genSaltSync();
        resto.passw = bcrypt.hashSync( passw, salt);
    }

    const user = await User.findByIdAndUpdate( id, resto);

    res.json({
        user
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