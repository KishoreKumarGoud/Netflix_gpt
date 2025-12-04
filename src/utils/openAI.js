import OpenAi, { OpenAI } from 'openai';
import { open_AI_key } from './constatnts';

const openai=new OpenAI({
    apiKey:open_AI_key,dangerouslyAllowBrowser: true 
})

export default openai