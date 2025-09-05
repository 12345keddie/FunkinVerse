'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getModRecommendations } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Zap } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  recommendations: undefined,
  error: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-primary-foreground font-bold">
      {pending ? (
        <>
          <Zap className="mr-2 h-4 w-4 animate-spin" />
          Getting Recommendations...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Get Recommendations
        </>
      )}
    </Button>
  );
}

export function RecommendationForm() {
  const [state, formAction] = useFormState(getModRecommendations, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state.error, toast]);

  return (
    <Card className="max-w-2xl mx-auto bg-white/5 border-white/10 text-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="text-primary" />
          AI Mod Recommender
        </CardTitle>
        <CardDescription>
          Enter some mods you've enjoyed (comma-separated), and our AI will suggest new ones for you to try!
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent>
          <div className="grid w-full gap-2">
            <Label htmlFor="playHistory">Your Play History</Label>
            <Textarea
              id="playHistory"
              name="playHistory"
              placeholder="e.g., Whitty, Tricky, Hex, Garcello..."
              className="bg-background/50 border-white/20 min-h-[100px] focus:ring-primary"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
      {state.recommendations && state.recommendations.length > 0 && (
        <CardContent>
          <h3 className="text-lg font-semibold mb-4 text-primary">Here are your recommendations:</h3>
          <ul className="list-disc list-inside space-y-2 rounded-md border border-white/10 bg-black/20 p-4">
            {state.recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}
