// Con typescript no es necesario realizar esta destructuración
const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
	// res. - El editor no entiende el tipo de dato si no se importa el response, solo es necesario en JS 

	const { q, nombre = 'No name', apikey, page = 1, limit } = req.query; // Parametros opcionales
	res.json({
		msg: 'get API - controller',
		q,
		nombre,
		apikey,
		page,
		limit
	});
}

const usuariosPost = (req, res) => {
	const { nombre, edad } = req.body;

	res.status(201).json({
		msg: 'post API - controller',
		nombre,
		edad,
	});
}

const usuariosPut = (req, res) => {
	const { id } = req.params;

	// Status 500
	res.status(500).json({
		msg: 'put API - controller',
		id
	});
}

const usuariosDelete = (req, res) => {
	res.json({
		msg: 'delete API - controller'
	});
}

const usuariosPatch = (req, res) => {
	res.json({
		msg: 'patch API - controller'
	});
}

module.exports = {
	usuariosGet,
	usuariosPost,
	usuariosPut,
	usuariosDelete,
	usuariosPatch
}