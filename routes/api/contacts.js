import express from "express";
import {
  addContact,
  listContacts,
  removeContact,
} from "../../models/contacts.js";
// import contacts from "../../models/contacts.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const contacts = await listContacts();
  res.json(contacts);
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.post("/", async (req, res, next) => {
  // res.json({ message: "template message" });
  const contacts = await addContact(req.body);
  res.json(contacts);
});

router.delete("/:contactId", async (req, res, next) => {
  const deleteContact = await removeContact(req.body.id);
  res.json(deleteContact);
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

export default router;
