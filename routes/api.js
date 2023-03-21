const express = require("express")
const router = express.Router()

const IndexController = require("../controllers/index.controller")
const WebController = require("../controllers/web.controller")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { indexValidator } = require("../middlewares/validators/index.validations")

router.get("/", IndexController.index)
router.post("/", validate(indexValidator), IndexController.indexPost)
router.get("/webservice/getmetadata", WebController.index)

module.exports = router
