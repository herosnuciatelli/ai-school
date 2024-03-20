import { GlobeDemo } from "@/components/GlobeDemo";
import { LampDemo } from "@/components/ui/Lamp"
import { GoogleGeminiEffectDemo } from "@/components/ui/google-gemini-effect";

export default function Home() {

  return (
    <main>
      <LampDemo />
      <GlobeDemo />
      <GoogleGeminiEffectDemo />
    </main>
  );
}
