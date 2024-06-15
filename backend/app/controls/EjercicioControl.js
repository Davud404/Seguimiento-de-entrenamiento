'use strict';
var models = require('../models');
var ejercicio = models.ejercicio;
var entrenamiento = models.entrenamiento;
var persona = models.persona;
var serie = models.serie;

class EjercicioControl {

    async listar_series(req, res) {
        const external = req.params.external;
        var lista = await serie.findAll({

        })
    }

    async guardar(req, res) {
        const external = req.params.external;
        try {
            var entrenamientoAux = await entrenamiento.findOne({ where: { external_id: external } });
            if (req.body.hasOwnProperty('nombre')) {
                var uuid = require('uuid');
                var data = {
                    nombre: req.body.nombre,
                    external_id: uuid.v4(),
                    id_entrenamiento: entrenamientoAux.id
                }
                var result = await ejercicio.create(data);
                if (result === null) {
                    res.status(401);
                    res.json({ msg: "Error", tag: "No se pudo guardar el rol", code: 401 });
                } else {
                    res.status(200);
                    res.json({ msg: "OK", tag: "Ejercicio registrado", code: 200 });
                }
            } else {
                res.status(400);
                res.json({ msg: "Error", tag: "Faltan datos", code: 400 });
            }
        } catch (error) {
            res.status(400);
            return res.status(404).json({ msg: "No existe ese entrenamiento", code: 404 });
        }
        /*
        try {
            if (req.body.hasOwnProperty('fecha')) {
                var personaAux = await persona.findOne({ where: { external_id: external } });
                if (personaAux === undefined || personaAux === null) {
                    res.status(400);
                    res.json({ msg: "Error", tag: "No existe ese usuario", code: 400 });
                } else {
                    var uuid = require('uuid');
                    var data = {
                        fecha: req.body.fecha,
                        id_persona: personaAux.id,
                        external_id: uuid.v4()
                    }
                    var result = await entrenamiento.create(data);
                    if (result === null) {
                        res.status(401);
                        res.json({ msg: "Error", tag: "No se pudo registrar el entrenamiento", code: 401 });
                    } else {
                        res.status(200);
                        res.json({ msg: "OK", tag: "Entrenamiento registrado", code: 200 });
                    }
                }
            } else {
                res.status(400);
                res.json({ msg: "Error", tag: "Faltan datos", code: 400 });
            }

        } catch (error) {
            return res.status(404).json({ msg: "No existe esa persona", code: 404 });
        }*/
    }
    //TODO
    async eliminar(req, res) {

    }

}

module.exports = EjercicioControl;