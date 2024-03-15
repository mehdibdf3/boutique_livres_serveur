require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { sequelize } = require('./models');

// Import des routes
const utilisateurRoutes = require('./routes/utilisateurRoutes');
const livreRoutes = require('./routes/livreRoutes');
const commandeRoutes = require('./routes/commandeRoutes');
const detailCommandeRoutes = require('./routes/detailCommandeRoutes');
const articlePanierRoutes = require('./routes/articlePanierRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());



app.use('/utilisateurs', utilisateurRoutes);
app.use('/livres', livreRoutes);
app.use('/commandes', commandeRoutes);
app.use('/detailCommandes', detailCommandeRoutes);
app.use('/articlePaniers', articlePanierRoutes);


const port = process.env.PORT || 3000;

sequelize.sync({force:true}).then(() => {
  app.listen(port, () => {
    console.log('Server running on http://localhost:3000');
  });
});