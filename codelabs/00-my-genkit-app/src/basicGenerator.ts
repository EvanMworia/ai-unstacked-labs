import { googleAI } from '@genkit-ai/google-genai';
import { genkit } from 'genkit';
import 'dotenv/config';
const ai = genkit({ plugins: [googleAI()] });

async function basicGeneration() {
	try {
		const { text } = await ai.generate({
			prompt: 'Create a simple 3-item todo list for setting up a new development environment.',
			model: googleAI.model('gemini-2.5-flash'),
		});
		console.log('======THIS IS WHAT GeminiModel HAS TO SAY=======');

		console.log(text);
	} catch (error) {
		console.error('Error generating content:', error);
	}
}

basicGeneration();
