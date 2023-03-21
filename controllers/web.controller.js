const { successResponse } = require("../helpers/methods")
const urlMetadata = require("url-metadata")

exports.index = async (req, res) => {
    const url = req.params?.url
    if (url) {
        urlMetadata(url).then(async (metadata) => {
            console.log(metadata)
            res.send(
                successResponse("Success", {
                    data: metadata
                })
            )
        })
    }
}
/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.indexPost = async (req, res) => {
    res.send(
        successResponse("Express JS API Boiler Plate post api working like a charm...", {
            data: "here comes you payload...",
            request: req.body
        })
    )
}
