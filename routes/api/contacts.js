import express from "express";
import {
  addContact,
  getContactById,
  listContacts,
  removeContact,
  updateContact,
} from "../../models/contacts.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const contacts = await listContacts();
  res.json(contacts);
});

router.get("/:contactId", async (req, res) => {
  const id = req.params.contactId;
  const contactById = await getContactById(id);
  if (contactById) {
    res.json(contactById);
  } else {
    res.json({ message: "Not found", status: 404 });
  }
});

router.post("/", async (req, res) => {
  const newContact = await addContact(req.body);

  res.json(newContact);
});

router.delete("/:contactId", async (req, res) => {
  const id = req.params.contactId;
  const deleteContact = await removeContact(id);
  if (deleteContact) {
    res.json({ message: "contact deleted", status: 200 });
  } else {
    res.json({ message: "Not found", status: 404 });
  }
});

router.put("/:contactId", async (req, res) => {
  const id = req.params.contactId;
  const updatedContact = await updateContact(id, req.body);
  if (Object.keys(req.body).length === 0) {
    return res.json({ message: "missing fields" });
  }
  if (updateContact) {
    res.json(updatedContact);
  } else {
    res.json({ message: "Not found" });
  }
});

export default router;
