import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getBrandStrategy(brandName: string, industry: string, location: string, userName: string) {
  try {
    const model = ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Act as a world-class Brand Surgeon and Growth Specialist. Analyze the brand "${brandName}" in the ${industry} industry, located in ${location}. The owner is ${userName}. 
      
      Generate a DEEP brand diagnosis and growth plan. 
      IMPORTANT: Your entire response must be in 'Hinglish' (Hindi + English).
      
      Structure your response into:
      1. 'strategy': A powerful high-level growth strategy.
      2. 'concepts': 3 extremely detailed surgical interventions (action steps).
      3. 'diagnosis': A blunt, honest 'Deep Diagnosis' of what is currently wrong or missing.
      4. 'roi_potential': A persuasive statement on what they can achieve.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            strategy: { type: Type.STRING },
            concepts: { type: Type.ARRAY, items: { type: Type.STRING } },
            diagnosis: { type: Type.STRING },
            roi_potential: { type: Type.STRING },
          },
          required: ["strategy", "concepts", "diagnosis", "roi_potential"],
        },
      },
    });

    const response = await model;
    const textOutput = response.text || '';
    return JSON.parse(textOutput.trim());
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      strategy: "Aapka brand standout karega with local dominance and modern digital edge strategy.",
      concepts: ["Hyper-local Google Maps dominance", "High-conversion Instagram video strategy", "Automated lead generation"],
      diagnosis: "Digital presence ki kami aapki growth rok rahi hai.",
      roi_potential: "Sahi strategy se aapka business 3 months mein 2x inquiries generate kar sakta hai."
    };
  }
}

export async function generateLogo(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `Professional minimalist business logo, high resolution, vector style, clean background. Prompt: ${prompt}` }]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Logo Generation Error:", error);
    return null;
  }
}

export function createBrandChat(userName: string, brandName: string, industry: string) {
  return ai.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: `You are the AI Surgical Assistant for Rama Mundhra, the No. 1 Brand Surgeon in Varanasi. 
      The user's name is ${userName}, their brand is ${brandName} in the ${industry} sector.
      
      YOUR GOALS:
      1. Help them diagnose business growth problems with sharp, actionable advice.
      2. FORMATTING RULES (CRITICAL):
         - Use Bullet Points (•) or Numbered Lists (1, 2, 3) for all advice.
         - Use bold headings (e.g., **Surgical Step**) for different sections.
         - Keep paragraphs very short (max 2 lines).
         - Add a newline between different points for clear spacing.
      3. Use 'Hinglish' (Hindi + English) naturally.
      4. Every 3-4 messages, subtly suggest contacting Rama Mundhra at +91 6387230817.
      5. Tone: Confident, Surgical, and Result-Oriented.
      6. LOGO MAKER: If the user wants a logo, ask for their preferred colors and style, then tell them to wait while you "operate".`,
    },
  });
}
