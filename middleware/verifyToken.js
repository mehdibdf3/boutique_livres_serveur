
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  // Si le token existe et commence par 'Bearer ', on enlève 'Bearer ' pour obtenir juste le token
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  if (!token) {
    return res.status(403).send({ message: "Aucun token fourni!" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Non autorisé!" });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyToken;