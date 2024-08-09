const Commande = require('../models/commande');

exports.createCom = (req, res, next) => {
    const { nom, boissonNom, tableNom } = req.body || {};

    if (!nom || !boissonNom || !tableNom) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const commande = new Commande({
        nom: nom,
        boissonNom: boissonNom,
        tableNom: tableNom,
    });

    commande.save()
        .then(() => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error.message
            });
        });
};

exports.getAllCom = (req, res, next ) => {
    Commande.find().then(
        (commande) => {
          res.status(200).json(commande);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );

} 


