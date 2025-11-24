import { generateAIResponse } from "../utils/aiClient.js";

export const getWritingSuggestions = async (text: string) => {
  const prompt = `
You are an AI writing assistant for authors.

Analyze the following story text and provide:

1. Writing quality improvements  
2. Grammar fixes  
3. Style and tone enhancements  
4. Suggestions to make the scene more engaging  
5. Optional: Rewrite the text in an improved way  
6. Provide 3 ideas for what could happen next in the story  

TEXT:
${text}
`;

  return await generateAIResponse(prompt);
};

export const improveSentence = async (text: string) => {
  const prompt = `
Rewrite the following sentence or paragraph to be clearer, more professional, and more engaging.
Keep the meaning the same.

TEXT:
${text}
`;

  return await generateAIResponse(prompt);
};

export const continueStory = async (text: string) => {
  const prompt = `
Continue the following story in an engaging, coherent way.
Write the next 2–3 paragraphs.

STORY:
${text}
`;

  return await generateAIResponse(prompt);
};
