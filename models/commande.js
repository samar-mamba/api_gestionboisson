const mongoose = require('mongoose');

const commandeSchema = mongoose.Schema({
    
    nom: { type: String, required: true },
    boissonNom: { type: String, required: true },
    tableNom: { type: String, required: true },


});

module.exports = mongoose.model('Commande', commandeSchema);