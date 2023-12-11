// const fs = require('fs/promises')
import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const contactsPath = path.resolve("src", "db", "./contacts.json");

const listContacts = async () => {
  try {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const result = contacts.find((contact) => contact.id === contactId);
    return result || null;
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id === contactId);
    if (index === -1) {
      return null;
    }
    const result = contacts.splice(index, 1);
    return result;
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
};

const addContact = async (body) => {
  // const contacts = await listContacts();
  // const newContact = {
  //   id: uuidv4(),
  //   body.name,
  //   email,
  //   phone,
  // };
  // const result = [...contacts, newContact];
  // await fs.writeFile(contactsPath, JSON.stringify(result, null, 2));
  // return newContact;
};

const updateContact = async (contactId, body) => {};

export {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
