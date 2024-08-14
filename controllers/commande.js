const Commande = require('../models/commande');

exports.createCom = (req, res, next) => {
    const { nom, boissonNom, tableNom , status} = req.body || {};

    if (!nom || !boissonNom || !tableNom) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const commande = new Commande({
        nom: nom,
        boissonNom: boissonNom,
        tableNom: tableNom,
        status: status !== undefined ? status : false
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

};

exports.udpdateCell =  (req, res, next) => {
    const id = req.params.id;
    const newStatus = req.body.status;

    Commande.updateOne({ _id: id }, { status: newStatus })
        .then(() => res.status(200).json({ message: 'Statut mis à jour !' }))
        .catch(error => res.status(400).json({ error }));
};




