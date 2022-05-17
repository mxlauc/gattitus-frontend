export default (req, res, next) => {
    res.setHeader("Cache-Control", "no-cache")
    next()
}
