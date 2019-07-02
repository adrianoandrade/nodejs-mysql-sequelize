const ContactsService = require('../services/contacts');

module.exports = function (app) {

    // CREATE
    app.post('/contacts', async (req, res) => {
        try {
            const { name } = req.body;
            const objContact = { name }
            var result = await ContactsService.Create(objContact);
            res.status(200).json({ error: false, data: result });
        }
        catch (err) {
            res.status(500).json({ error: true, detail: err.message })
        }
    });

    // LIST ALL
    app.get('/contacts', async (req, res) => {
        try {
            var contacts = await ContactsService.List();
            res.status(200).json({ error: false, data: contacts });
        }
        catch (err) {
            res.status(500).json({ error: true, detail: err.message })
        }
    });

    // EDIT
    app.put('/contacts', async (req, res) => {
        try {
            const { idContact, name } = req.body;
            const objContact = { idContact, name }
            await ContactsService.Update(objContact);
            res.status(200).json({ error: false });
        }
        catch (err) {
            res.status(500).json({ error: true, detail: err.message })
        }
    });

    // DELETE
    app.delete('/contacts', async (req, res) => {
        try {
            const { idContact } = req.body;
            const objContact = { idContact }
            await ContactsService.Delete(objContact);
            res.status(200).json({ error: false });
        }
        catch (err) {
            res.status(500).json({ error: true, detail: err.message })
        }
    });

    // GET BY ID
    app.get('/contacts/:idContact', async (req, res) => {
        try {
            const { idContact } = req.params;
            const objContact = { idContact }
            const contact = await ContactsService.Get(objContact);
            res.status(200).json({ error: false, data: contact });
        }
        catch (err) {
            res.status(500).json({ error: true, detail: err.message })
        }
    });

};