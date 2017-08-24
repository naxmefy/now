const fetch = require('node-fetch')
const ProxyAgent = require('https-proxy-agent')
const proxyFromEnv = require('proxy-from-env')

exports = module.exports = (url, options = {}) => {
    const proxy = proxyFromEnv.getProxyForUrl(url)
    const agent = proxy && proxy.length > 0 ? new ProxyAgent(proxy) : undefined
    return fetch(url, Object.assign({agent}, options))
}

exports.originalFetch = fetch
