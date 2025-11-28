const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const {
  getAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
  getCards,
  createCard,
  updateCard,
  deleteCard
} = require('../controllers/profileController');

// Todas las rutas requieren autenticación
router.use(authenticate);

// Direcciones
router.get('/addresses', getAddresses);
router.post('/addresses', createAddress);
router.put('/addresses/:addressId', updateAddress);
router.delete('/addresses/:addressId', deleteAddress);

// Tarjetas
router.get('/cards', getCards);
router.post('/cards', createCard);
router.put('/cards/:cardId', updateCard);
router.delete('/cards/:cardId', deleteCard);

module.exports = router;