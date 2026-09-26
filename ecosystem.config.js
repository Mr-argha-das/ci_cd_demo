module.exports = {
  apps: [
    {
      name: "fastapi-demo",
      script: "env/bin/uvicorn",
      args: "app.main:app --host 0.0.0.0 --port 8099",
      interpreter: "none",
      autorestart: true,
      watch: false,
      env: {
        PYTHONUNBUFFERED: "1"
      }
    }
  ]
};
