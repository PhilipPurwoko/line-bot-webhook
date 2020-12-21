module.exports = (path, opts = 'utf8') =>
    new Promise((resolve, reject) => {
        fs.readFile(path, opts, (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})