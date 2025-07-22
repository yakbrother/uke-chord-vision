import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UkuleleChordDiagram } from "./UkuleleChordDiagram";
import { getAllChords, tunings } from "@/data/chordData";
import { cn } from "@/lib/utils";

interface ChordLibraryProps {
  selectedTuning: string;
}

export const ChordLibrary = ({ selectedTuning }: ChordLibraryProps) => {
  const [selectedChord, setSelectedChord] = useState<string>("C");
  const [selectedVariation, setSelectedVariation] = useState<number>(0);
  
  const chords = getAllChords(selectedTuning);
  const currentChordData = chords.find(c => c.name === selectedChord);
  const tuningData = tunings[selectedTuning];

  if (!tuningData || !currentChordData) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No chords available for this tuning.</p>
      </div>
    );
  }

  const currentVariation = currentChordData.variations[selectedVariation];

  return (
    <div className="space-y-6">
      {/* Chord Selector */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Select Chord</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {chords.map((chord) => (
            <Button
              key={chord.name}
              variant={selectedChord === chord.name ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedChord(chord.name);
                setSelectedVariation(0);
              }}
              className={cn(
                "h-10 font-medium",
                selectedChord === chord.name 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-background hover:bg-accent"
              )}
            >
              {chord.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Variation Selector */}
      {currentChordData.variations.length > 1 && (
        <div className="space-y-3">
          <h3 className="text-md font-medium text-foreground">Variations</h3>
          <div className="flex flex-wrap gap-2">
            {currentChordData.variations.map((_, index) => (
              <Button
                key={index}
                variant={selectedVariation === index ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedVariation(index)}
                className="h-8 px-3"
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Chord Diagram */}
      <Card className="bg-gradient-warm border-2 border-accent/20">
        <CardContent className="p-6 flex justify-center">
          <UkuleleChordDiagram
            chord={{
              ...currentVariation,
              tuning: tuningData.notes,
              tuningName: selectedTuning.toUpperCase()
            }}
          />
        </CardContent>
      </Card>

      {/* Chord Information */}
      <div className="bg-card rounded-lg p-4 space-y-2">
        <h4 className="font-semibold text-card-foreground">Playing Tips</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Numbers indicate which finger to use (1=index, 2=middle, 3=ring, 4=pinky)</li>
          <li>• "0" means play the string open (no fret pressed)</li>
          <li>• "×" means don't play that string (mute it)</li>
          <li>• Press firmly behind the fret wire, not on top of it</li>
        </ul>
      </div>
    </div>
  );
};