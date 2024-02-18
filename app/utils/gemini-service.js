import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBuo-_X5r5eecQZKo61t0Sb0_liAWC9eRQ';

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export async function generateAnswer(modelHistory, question, updateHistory) {
  // In real project, we have to provide a lot of Q&As to Gemini Api
  const chat = model.startChat({
    history: modelHistory,
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const result = await chat.sendMessage(question);
  const response = result.response;
  const answer = response.text();
  updateHistory(answer);
}
