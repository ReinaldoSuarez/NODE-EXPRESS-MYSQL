import express from "express";
import { dirname, join } from 'path';
import { fileURLToPath } from "url";

// Creando el servidor
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Agregar configuración para archivos estáticos
app.use(express.static(join(__dirname, "public")));

// Creando consultas
app.get('/', (req, res) => res.sendFile(join(__dirname, "views", "login.html")));
app.get('/register', (req, res) => res.sendFile(join(__dirname, "views", "register.html")));
app.get('/login', (req, res) => res.sendFile(join(__dirname, "views", "login.html")));

// Imprimir respuesta
app.listen(3000, () => {
  console.log("Servidor funcionando en el puerto", 3000);
});
