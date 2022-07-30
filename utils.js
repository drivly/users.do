const enrichRequest = req => {
  req.id = req.headers.get('CF-Request-ID') + '-' + req.cf.colo
  req.ip = req.headers.get('CF-Connecting-IP')
  recentInteractions[req.ip] = recentInteractions[req.ip] ? recentInteractions[req.ip] + 1 : 1
  req.recentInteractions = recentInteractions[req.ip]
  req.timestamp = new Date().toISOString()
  if(req.recentInteractions > 100) {
    return error(429, { error: 'Over Rate Limit - Try again soon' })
  }
}
