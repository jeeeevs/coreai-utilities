import Exa from 'exa-js';

const apiKey = process.env.EXA_API_KEY;
if (!apiKey) {
  throw new Error('Missing EXA_API_KEY environment variable');
}

const exa = new Exa(apiKey);

/**
 * Creates and polls a research-agent task on Exa.ai.
 * @param prompt - The instructions or prompt for the task.
 * @returns The completed task result.
 */
export async function researchAgent(prompt: string) {
  const { id: taskId } = await exa.research.createTask({
    instructions: prompt,
    output: {
      schema: {
        type: 'object',
        required: ['title', 'date', 'source', 'sourceUrl', 'keyPoints', 'note'],
        properties: {
          title: { type: 'string', description: 'Headline or title of the article' },
          date: { type: 'string', description: 'Date the content was published or retrieved' },
          source: { type: 'string', description: 'Name of the publisher or source' },
          sourceUrl: { type: 'string', description: 'URL link to the original content' },
          keyPoints: {
            type: 'array',
            description: 'Bullet points summarizing the main takeaways',
            items: { type: 'string' }
          },
          note: { type: 'string', description: 'Optional footnote or additional context' }
        },
        additionalProperties: false
      }
    }
  });

  return exa.research.pollTask(taskId);
}

/**
 * Writer agent that generates a paragraph based on the given prompt.
 * @param prompt - The topic or instructions for the paragraph.
 * @returns The completed task result.
 */
export async function writerAgent(prompt: string) {
  const instructions = `Write a paragraph about: ${prompt}`;
  return researchAgent(instructions);
}