import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

export default router;

let contacts = [
  {
    // id: nanoid(),
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123456789",
  },
];

router.get("/", async (req, res, next) => {
  // res.json({ message: "template message" });

  try {
    res.json({
      status: "success",
      code: 200,
      data: {
        contacts,
      },
    });
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
});

router.get("/:contactId", async (req, res, next) => {
  // res.json({ message: "template message" });

  try {
    const { id } = req.params;
    const [contact] = contacts.filter((el) => el.id === id);
    res.json({
      status: "success",
      code: 200,
      data: { contact },
    });
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });

  const { name, email, phone } = req.body;
  const contact = {
    // id: nanoid(),
    name,
    email,
    phone,
  };

  contacts.push(contact);

  res.status(201).json({
    status: "success",
    code: 201,
    data: { contact },
  });
});

router.delete("/:contactId", async (req, res, next) => {
  // res.json({ message: "template message" });

  const { id } = req.params;
  const newContacts = contacts.filter((el) => el.id !== id);
  contacts = [...newContacts];
  res.status(204).json();
});

router.put("/:contactId", async (req, res, next) => {
  // res.json({ message: "template message" });

  const { id } = req.params;
  const { name, email, phone } = req.body;
  const [contact] = contacts.filter((el) => el.id === id);
  contact.name = name;
  contact.email = email;
  contact.phone = phone;
  res.json({
    status: "success",
    code: 200,
    data: { contact },
  });
});
