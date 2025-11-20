import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
    // In a real production app, we would handle this more gracefully if the key is missing.
    // For this demo, we assume process.env.API_KEY is injected.
    if (!process.env.API_KEY) {
        console.warn("API Key missing. AI features will mock responses.");
        return null;
    }
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateVibeRecommendation = async (vibe: string): Promise<string> => {
  const client = getAiClient();
  
  // Fallback if no key is present (for UI demo purposes if key isn't set in env)
  if (!client) {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return "KEY MISSING: Imagine a really cool hidden rooftop bar in Bairro Alto with cheap wine and jazz. That's what I would have said.";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are the AI backend for "Bored Tourist", an app for young travelers (Gen Z/Millennials) who hate boring tourist traps. 
      The user is in Lisbon. They are feeling: "${vibe}".
      
      Give a SINGLE, specific, short recommendation (max 2 sentences) for something to do in Lisbon right now.
      Tone: Irreverent, cool, slightly chaotic, maybe use some slang. Avoid generic places like Belem Tower or the Oceanarium unless there's a twist.
      Focus on experiences, hidden spots, or vibes.`,
      config: {
        temperature: 1.2, // High creativity
      }
    });

    return response.text || "The AI is currently out partying. Try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI had too much Ginjinha. Try again.";
  }
};