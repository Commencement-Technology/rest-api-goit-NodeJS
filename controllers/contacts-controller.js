import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";
import {
  newContactValidation,
  contactsEditValidation,
} from "../schemas/contacts-validation.js";
import {
  addContact,
  getContactById,
  listContacts,
  removeContact,
  updateContact,
} from "../models/contacts.js";

async function getAllContacts(req, res, next) {
  const contacts = await listContacts();
  if (contacts) {
    res.json(contacts);
  } else {
    throw HttpError(404, "No contacts found");
  }
}

async function getContactsById(req, res, next) {
  const id = req.params.contactId;
  const contactById = await getContactById(id);
  if (contactById) {
    res.json(contactById);
  } else {
    throw HttpError(404, "Contact not found");
  }
}

async function addNewContact(req, res, next) {
  const { error } = newContactValidation.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const newContact = await addContact(req.body);
  res.status(201).json(newContact);
}

async function deleteContact(req, res, next) {
  const id = req.params.contactId;
  const deleteContact = await removeContact(id);
  if (deleteContact) {
    res.json({ message: "contact deleted", status: 200 });
  } else {
    res.status(404).json({ message: "Not found", status: 404 });
  }
}

async function editContact(req, res, next) {
  const { error } = contactsEditValidation.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const id = req.params.contactId;
  const updatedContact = await updateContact(id, req.body);
  if (Object.keys(req.body).length === 0) {
    return res.json({ message: "missing fields" });
  }
  if (updateContact) {
    res.status(201).json(updatedContact);
  } else {
    res.json({ message: "Not found" });
  }
}

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactsById: ctrlWrapper(getContactsById),
  addNewContact: ctrlWrapper(addNewContact),
  deleteContact: ctrlWrapper(deleteContact),
  editContact: ctrlWrapper(editContact),
};
