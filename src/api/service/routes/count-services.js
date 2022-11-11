module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/services/count",
      handler: "service.count",
    },
  ],
};
