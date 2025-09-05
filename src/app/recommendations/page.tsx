import { Header } from "@/components/Header";
import { RecommendationForm } from "@/components/RecommendationForm";

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto py-8 px-6">
        <h1 className="text-4xl font-headline font-bold text-center mb-2 text-primary tracking-tighter">Find Your Next Favorite Mod</h1>
        <p className="text-center text-muted-foreground mb-8">Let our AI find the perfect mod for you based on your play history.</p>
        <RecommendationForm />
      </main>
    </div>
  );
}
