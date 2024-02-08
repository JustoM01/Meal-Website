const router = require('express').Router();
const menuRoutes = require('./menuRoutes');

// Prefix all routes defined in `menuRoutes.js` now making it /api/menu after prefixing the api folder
router.use('/menu', menuRoutes);




module.exports = router;
