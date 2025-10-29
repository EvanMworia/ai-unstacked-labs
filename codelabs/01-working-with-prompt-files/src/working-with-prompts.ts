import 'dotenv/config';
import { googleAI } from '@genkit-ai/google-genai';
import { genkit } from 'genkit';

//1. initialize genkit with googleAI
const ai = genkit({
	plugins: [googleAI()],
});

//2. Load the prompt file (story-generator.prompt)
//You get a callable function in return that knows what prompt to use
const storyGenerator = ai.prompt('story-generator');

async function generateStory() {
	try {
		//3. Provide inputs matching the schema defined in the .prompt file
		const storyInputs = {
			character: 'A Navy SEAL in his third deployment, He is a good sniper',
			team: 'A unit of Navy SEALS operatives called the delta unit, deployed to war torn places to take back control and get rid of rebels',
			setting: 'A war ravaged arabic town, with militia and the taliban. Fighting for control of the town',
		};

		const response = await storyGenerator(storyInputs);
		console.log(response.text);
	} catch (error) {
		console.error(error);
	}
}

generateStory();
