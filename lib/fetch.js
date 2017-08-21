const fetch = require('node-fetch')
const ProxyAgent = require('https-proxy-agent')

const env = require('./env')

const proxy = env('https_proxy') 
    || env('HTTPS_PROXY')
    || env('http_proxy')
    || env('HTTP_PROXY')
const agent = proxy ? new ProxyAgent(proxy) : undefined

exports = module.exports = (url, options = {}) => {
    return fetch(url, Object.assign(options, {agent}))
}

exports.originalFetch = fetch
