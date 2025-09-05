'use server';

import { recommendFunkinMod, type RecommendFunkinModInput } from "@/ai/flows/ai-funkin-mod-recommendation";
import { z } from "zod";

const formSchema = z.object({
  playHistory: z.string().min(3, "Please enter at least one mod you've played."),
});

type RecommendationState = {
  recommendations?: string[];
  error?: string;
}

export async function getModRecommendations(
  prevState: RecommendationState,
  formData: FormData
): Promise<RecommendationState> {
  const validatedFields = formSchema.safeParse({
    playHistory: formData.get("playHistory"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.playHistory?.[0],
    };
  }

  try {
    const input: RecommendFunkinModInput = {
      playHistory: validatedFields.data.playHistory,
    };
    const result = await recommendFunkinMod(input);
    return { recommendations: result.modRecommendations };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return { error: `AI recommendation failed: ${errorMessage}` };
  }
}
