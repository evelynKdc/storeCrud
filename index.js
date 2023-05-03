const express = require('express');
const routerApi = require('./routes');
// Importar middleware
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler'); //importar las funciones que se uilizarán
const app = express();
const port = 3000;
app.use(express.json());
routerApi(app);
// Utilizamos los middleware. Siempre deben ir después del routing:
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Bienvenido al servidor');
});

app.listen(port, () => {
  console.log('Escuchando en el puerto: ', port);
});
