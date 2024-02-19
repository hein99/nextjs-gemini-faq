import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_KEY } from './api-key';

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export async function generateAnswer(modelHistory, question, updateHistory) {
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
