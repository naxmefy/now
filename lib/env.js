module.exports = (envString, defaultValue) => {
    return process.env[envString] || defaultValue
}
