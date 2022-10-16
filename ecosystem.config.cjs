module.exports = {
  apps: [
    {
      name: "auth-service",
      script: "./build/src/app.js",
      watch: false,
      node_args: [
        "-r",
        "./node_modules/dotenv/config",
        "--experimental-modules",
        "--experimental-json-modules",
      ],
      timestamp: "HH:mm Z DD-MM-YYYY",
      ignore_watch: ["node_modules", "uploads"],
    },
  ],
};
