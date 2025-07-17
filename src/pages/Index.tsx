import { useState } from "react";
import { TuningSelector } from "@/components/TuningSelector";
import { ChordLibrary } from "@/components/ChordLibrary";
import { Music4 } from "lucide-react";

const Index = () => {
  const [selectedTuning, setSelectedTuning] = useState<string>("standard");

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="bg-primary shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <Music4 className="w-8 h-8 text-primary-foreground" />
            <div>
              <h1 className="text-2xl font-bold text-primary-foreground">
                Ukulele Chord Master
              </h1>
              <p className="text-primary-foreground/80 text-sm">
                Visual chord diagrams for alternate tunings
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Tuning Selector */}
        <TuningSelector 
          selectedTuning={selectedTuning}
          onTuningChange={setSelectedTuning}
        />

        {/* Chord Library */}
        <ChordLibrary selectedTuning={selectedTuning} />
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 bg-muted/30 text-center">
        <p className="text-sm text-muted-foreground">
          Perfect for exploring alternate ukulele tunings like EAEA and Open C
        </p>
      </footer>
    </div>
  );
};

export default Index;
