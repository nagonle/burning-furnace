const { Router } = require('express')

const router = Router()

router.get('/status', (req, res, next) => {
  res.send('running')
})

module.exports = router
