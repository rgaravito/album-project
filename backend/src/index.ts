import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares de seguridad
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // límite de 100 requests por windowMs
  message: {
    error: 'Demasiadas solicitudes desde esta IP, por favor intenta de nuevo más tarde.'
  }
});
app.use(limiter);

// Middleware para parsear JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rutas básicas
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'API de LáminaGol funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/laminas', (req, res) => {
  // TODO: Implementar endpoint para obtener láminas
  res.json({
    message: 'Endpoint de láminas - Próximamente',
    laminas: []
  });
});

app.get('/api/usuarios', (req, res) => {
  // TODO: Implementar endpoint para obtener usuarios
  res.json({
    message: 'Endpoint de usuarios - Próximamente',
    usuarios: []
  });
});

// Middleware de manejo de errores
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Error interno del servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Algo salió mal'
  });
});

// Middleware para rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    message: `La ruta ${req.originalUrl} no existe en esta API`
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor de LáminaGol ejecutándose en el puerto ${PORT}`);
  console.log(`📊 Health check disponible en: http://localhost:${PORT}/api/health`);
});