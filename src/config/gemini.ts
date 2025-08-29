import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GOOGLE_API_KEY || '';
if (!apiKey) {
  throw new Error('GOOGLE_API_KEY is not set');
}

const ai = new GoogleGenAI({ apiKey });

async function getGeminiResponse(prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-pro',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error('Error fetching Gemini response:', error);
    throw error;
  }
}
export { getGeminiResponse };
