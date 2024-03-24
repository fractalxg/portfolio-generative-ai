const express = require("express");
const axios = require("axios");
const router = express.Router();
const OpenAI = require("openai");
router.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

router.post("/prompt", async (req, res) => {
  const prompt = req.body;
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-instruct",
    message: [
      {
        role: "user",
        content: `According to the following text:${prompt.promptData}, 
        Answer the following question:${prompt.promptMessage} `,
      },
    ],
    max_tokens: 100,
    temperature: 0,
  });
  res.send(response);
});

module.exports = router;
