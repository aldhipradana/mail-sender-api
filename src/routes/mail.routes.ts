

module.exports = ( app: any ) => {
    const mail = require('../controllers/mail.controllers')
    const router = require('express').Router()

    router.post('/sendmail', mail.mailsend)
    app.use('/api/mail', router)

}