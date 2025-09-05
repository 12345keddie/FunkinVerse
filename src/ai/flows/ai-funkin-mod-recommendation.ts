'use server';
/**
 * @fileOverview A Friday Night Funkin' mod recommendation AI agent.
 *
 * - recommendFunkinMod - A function that recommends Friday Night Funkin' mods based on user play history.
 * - RecommendFunkinModInput - The input type for the recommendFunkinMod function.
 * - RecommendFunkinModOutput - The return type for the recommendFunkinMod function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendFunkinModInputSchema = z.object({
  playHistory: z
    .string()
    .describe("A comma separated list of mods that the user has played."),
});
export type RecommendFunkinModInput = z.infer<typeof RecommendFunkinModInputSchema>;

const RecommendFunkinModOutputSchema = z.object({
  modRecommendations: z.array(z.string()).describe("A list of recommended Friday Night Funkin' mods based on the user's play history."),
});
export type RecommendFunkinModOutput = z.infer<typeof RecommendFunkinModOutputSchema>;

export async function recommendFunkinMod(input: RecommendFunkinModInput): Promise<RecommendFunkinModOutput> {
  return recommendFunkinModFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendFunkinModPrompt',
  input: {schema: RecommendFunkinModInputSchema},
  output: {schema: RecommendFunkinModOutputSchema},
  prompt: `You are an AI mod recommendation agent specializing in Friday Night Funkin'.

You will use the user's play history to recommend new and popular mods tailored to their preferences.

Play History: {{{playHistory}}}

Recommend mods similar to the user's play history.`, 
});

const recommendFunkinModFlow = ai.defineFlow(
  {
    name: 'recommendFunkinModFlow',
    inputSchema: RecommendFunkinModInputSchema,
    outputSchema: RecommendFunkinModOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
