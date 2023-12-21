import express from "express";
import {
  isValidId,
  isEmptyBody,
  isEmptyBodyFavorite,
} from "../../middleware/index.js";
import contactsRequests from "../../controllers/contacts-controller.js";

const router = express.Router();

router.get("/", contactsRequests.getAllContacts);

router.get("/:contactId", isValidId, contactsRequests.getContactsById);

router.post("/", isEmptyBody, contactsRequests.addNewContact);

router.delete("/:contactId", isValidId, contactsRequests.deleteContact);

router.put("/:contactId", isValidId, isEmptyBody, contactsRequests.editContact);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBodyFavorite,
  contactsRequests.updateContact
);

export default router;
