const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Docker Hub y Git'));
app.get('/health', (req, res) => res.send({ status: 'ok' }));

//app.listen(PORT, () => console.log(`App corriendo en puerto ${PORT}`));

if (require.main === module) {
    app.listen(PORT, () => console.log(`App corriendo en puerto ${PORT}`));
  }

module.exports = app;
