const connection = require('./connection');
const ContactsModel = require('../models/contacts')(connection);

const ContactsService = {

    List: async () => new Promise(async (resolve, reject) => {
        try {
            await connection.sync();
            const contacts = await ContactsModel.findAll();
            resolve(contacts);
        }
        catch (err) {
            reject(new Error(err));
        }
    }),

    Create: async (contact) => new Promise(async (resolve, reject) => {
        try {
            await connection.sync();
            const result = await ContactsModel.create(contact);
            resolve(result);
        }
        catch (err) {
            reject(new Error(err));
        }
    }),

    Update: async (contact) => new Promise(async (resolve, reject) => {
        try {
            await connection.sync();
            const {idContact,name} = contact;
            await ContactsModel.update({ name }, { where: { idContact } });
            resolve();
        }
        catch (err) {
            reject(new Error(err));
        }
    }),

    Delete: async (contact) => new Promise(async (resolve, reject) => {
        try {
            await connection.sync();
            const {idContact} = contact;
            await ContactsModel.destroy({ where: { idContact } });
            resolve();
        }
        catch (err) {
            reject(new Error(err));
        }
    }),

};

module.exports = ContactsService;