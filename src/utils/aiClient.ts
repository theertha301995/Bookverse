import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY as string
});

export const generateAISummary = async (text: string) => {
  const prompt = `
  Summarize the following text in a clear, concise, and engaging way.
  Keep the summary under 200 words.

  TEXT:
  ${text}
  `;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }]
  });

  const content =
    response?.choices?.[0]?.message?.content ??
    "AI could not generate a summary.";

  return content;
};
export const generateAIResponse = async (prompt: string) => {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return (
    response?.choices?.[0]?.message?.content ??
    "AI could not generate a response."
  );
};