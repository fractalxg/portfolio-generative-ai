const express = require("express");
const axios = require("axios");
const router = express.Router();
const OpenAI = require("openai");
router.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

router.get("/prompt", async (req, res) => {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-instruct",
      message: [{"role":"user","content":"Say this is a test."}],
      max_tokens: 10,
      temperature: 0,
    });
  res.send(response);
});

module.exports = router;
