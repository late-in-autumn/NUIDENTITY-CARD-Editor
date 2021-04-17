module.exports = {
    distDir: 'build',
    target: "serverless",
    future: {
      webpack5: true,
    },
    async rewrites() {
      return [
        {
          source: "/:any*",
          destination: "/",
        },
      ];
    },
  };