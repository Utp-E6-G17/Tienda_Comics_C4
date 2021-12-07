const express = require("express");

const comicController = require('../controllers/comicController');
const facturaController = require('../controllers/facturaController');
const userController = require("../controllers/userController");

const router = express.Router();



router.get('/comics',comicController.getAllComics);
router.get('/comics/isbn/:isbn',comicController.getComicsByIsbn);
router.get('/users',userController.getAllusers);
router.get('/users/username/:username',userController.getUserByUserName);
router.get('/facturas',facturaController.getAllFactura);
router.post('/facturas',facturaController.newFactura);
router.post('/registro',userController.Registro);
router.post('/autenticar',userController.autenticar);

router.put('/comics/isbn/:isbn',comicController.updateComic);
router.delete('/facturas/comicsisbn/:comicisbn',facturaController.delete);


module.exports = router;