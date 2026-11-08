import router from "./src/routes/index.routes.js";
import Server from "./src/server/config.js";

const server = new Server();
server.app.use(`/api`, router);

// En Vercel no se levanta el servidor: Vercel usa la app exportada
if (!process.env.VERCEL) {
  server.listen();
}

export default server.app;
