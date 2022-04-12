const express = require("express");
const router = express.Router();

const { auth } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/uploadFile')

const { register, login, updateAccount, deleteAccount, getAccountId, checkAuth } = require('../controllers/account')
const { addLink, getLinkId, updateLink, deleteLink, getLink } = require('../controllers/link')
const { addView, getViewId, updateView } = require('../controllers/view')



router.post('/register', register)
router.post('/login', login)
router.get('/myaccount', auth, getAccountId)
router.patch('/profile', auth, updateAccount)
router.delete('/profile', auth, deleteAccount)
router.get('/check-auth', auth, checkAuth)

router.post('/addlink/:id', auth, uploadFile("picture"), addLink)
router.get('/mylink', auth, getLinkId)
router.get('/getlink/:id', getLink)
router.patch('/mylink/:id', uploadFile("picture"), updateLink)
router.delete('/mylink/:id', deleteLink)

router.post('/views/:id', addView)
router.get('/views/:id', getViewId)
router.patch('/views/:id', updateView)

module.exports = router;