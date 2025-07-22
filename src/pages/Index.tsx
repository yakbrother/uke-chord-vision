import { useState } from "react";
import { TuningSelector } from "@/components/TuningSelector";
import { ChordLibrary } from "@/components/ChordLibrary";
import { Music4 } from "lucide-react";
import heroImage from "@/assets/hero-ukulele.jpg";
import musicalNotes from "@/assets/musical-notes.jpg";

const Index = () => {
  const [selectedTuning, setSelectedTuning] = useState<string>("eacsharp");

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section with Background Image */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <header className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Music4 className="w-12 h-12 text-white drop-shadow-lg" />
                <h1 className="text-5xl font-bold text-white drop-shadow-lg">
                  Alt Ukulele
                </h1>
              </div>
              <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow-md">
                Master alternate ukulele tunings with visual chord diagrams and interactive sound
              </p>
              <div className="flex items-center justify-center space-x-2 pt-4">
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                  E A C# F#
                </div>
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                  Open C
                </div>
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                  Standard
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Tuning Selector */}
        <div className="relative">
          <TuningSelector 
            selectedTuning={selectedTuning}
            onTuningChange={setSelectedTuning}
          />
        </div>

        {/* Chord Library */}
        <div className="relative">
          <ChordLibrary selectedTuning={selectedTuning} />
        </div>
      </main>

      {/* Footer with decorative image */}
      <footer 
        className="mt-16 py-12 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${musicalNotes})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40"></div>
        <div className="relative z-10 text-center">
          <p className="text-white text-lg font-medium mb-2">
            Alt Ukulele
          </p>
          <p className="text-white/80 text-sm">
            Perfect for exploring alternate ukulele tunings like EAEA and Open C
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
