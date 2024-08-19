import { OpenAI } from 'openai'

let openAi: OpenAI
export const GenerateArticle = async (tittle: string, description: string) => {
    if (!openAi) {
        openAi = new OpenAI({
            apiKey: import.meta.env.VITE_APP_OPEN_AI_KEY,
            dangerouslyAllowBrowser: true,
        })
    }
    const result = await openAi.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content:
                    'You are helpful assistent designed to assist users in creating engaging content, such as blogs, articles, or any written material ',
            },
            {
                role: 'user',
                content:
                    'Please create a blog post about title: \n' +
                    tittle +
                    ' with the following description: \n' +
                    description,
            },
        ],
    })
    return result.choices[0].message.content
}
