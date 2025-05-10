

// import express, { type Request, Response, NextFunction } from "express";
// import { registerRoutes } from "./routes.js";

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Simple logging middleware
// app.use((req, res, next) => {
//   const start = Date.now();
//   const path = req.path;

//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     if (path.startsWith("/api")) {
//       let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
//       console.log(logLine);
//     }
//   });

//   next();
// });

// (async () => {
//   const server = await registerRoutes(app);

//   app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
//     const status = err.status || err.statusCode || 500;
//     const message = err.message || "Internal Server Error";

//     res.status(status).json({ message });
//     console.error(err);
//   });

//   // API response to indicate that the server is running
//   app.get("/", (_req: Request, res: Response) => {
//     res.json({ message: "API is running" });
//   });

//   // Default to port 5000 or use environment variable
//   const port = process.env.PORT || 5000;
//   server.listen({
//     port,
//     host: "0.0.0.0", // Use 0.0.0.0 for production to listen on all network interfaces
//   }, () => {
//     console.log(`Server running on port ${port}`);
//   });
// })();


import express, { type Request, Response, NextFunction } from "express";
<<<<<<< HEAD
=======
import cors from "cors";
>>>>>>> af08fb3f08b43cf73bd565ea4993634f70e7d988
import { registerRoutes } from "./routes.js";

const app = express();

// ✅ Allow CORS from specific domains
app.use(cors({
  origin: [
    "https://downloadtiktokvideosinhd.com",
    "https://www.downloadtiktokvideosinhd.com"
  ]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      console.log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    console.error(err);
  });

  app.get("/", (_req: Request, res: Response) => {
    res.json({ message: "API is running" });
  });

  const port = process.env.PORT || 5000;
  server.listen({
    port,
    host: "0.0.0.0"
  }, () => {
    console.log(`Server running on port ${port}`);
  });
})();
