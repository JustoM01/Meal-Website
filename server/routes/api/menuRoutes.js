const router = require('express').Router();
const sequelize = require('../../config/connection');
const Menu = require('../../models/Menu');
const multer = require('multer')
// Set up multer storage
const storage = multer.memoryStorage(); // Use memory storage for binary files

router.get('/all', async (req, res) => {
  try {
    const menuData = await Menu.findAll({});
    return res.json(menuData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
  }
});



const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), (req, res) => {
  try {
    console.log('Request Body:', req.body);
    console.log('Request File:', req.file);

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    console.log('File details:', req.file);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




module.exports = router;
