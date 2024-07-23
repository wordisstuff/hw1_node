import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (num) => {

    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data) || [];
        let arrNewContacts = [];

        for (let i = 0; i < num; i += 1) {
            const newContact = createFakeContact();
            arrNewContacts.push(newContact);
        }
            contacts.push(...arrNewContacts);

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8')
        console.log(arrNewContacts.length + ' contacts created');
    }
    catch (error) {
        console.log(error);
    }
}

generateContacts(5);
