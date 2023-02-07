const PROXY_CONFIG = [
  {
    context: ["/api"],
    pathRewrite: {
      "^/api": ""
    },
    target: "http://127.0.0.1:8080/",
    secure: false
  },
  {
    bypass: function(req, res, proxyOptions) {
      const parsed = url.parse(req.url);
      if (req.url === "/config.json") {
        return "/assets/config-dev.json";
      }
    }
  }
];

module.exports = PROXY_CONFIG;
