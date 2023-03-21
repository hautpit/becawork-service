const { successResponse } = require("../helpers/methods")
const urlMetadata = require("url-metadata")

exports.index = async (req, res) => {
    urlMetadata(
        "https://genk.vn/mot-mau-o-ssd-noi-tieng-cua-samsung-dang-bi-lam-gia-tran-lan-tinh-vi-den-muc-phan-mem-cua-hang-cung-kho-the-phan-biet-20230320171229053.chn"
    ).then(async (metadata) => {
        console.log(JSON.stringify(metadata, "*****", 8))
    })
    res.send(
        successResponse("Hau neeeeeeeeee", {
            data: "here comes you payload..."
        })
    )
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
