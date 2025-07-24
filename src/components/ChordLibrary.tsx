import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UkuleleChordDiagram } from "./UkuleleChordDiagram";
import { getAllChords, tunings } from "@/data/chordData";
import { Label } from "@/components/ui/label";

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

  // Group chords by type
  const majorChords = chords.filter(chord => !chord.name.includes('m') && !chord.name.includes('7'));
  const minorChords = chords.filter(chord => chord.name.includes('m') && !chord.name.includes('7'));
  const seventhChords = chords.filter(chord => chord.name.includes('7'));

  return (
    <div className="space-y-6">
      {/* Chord Type Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="major-chords" className="text-sm font-medium">Major Chords</Label>
          <Select 
            value={majorChords.some(c => c.name === selectedChord) ? selectedChord : ""} 
            onValueChange={(value) => {
              setSelectedChord(value);
              setSelectedVariation(0);
            }}
          >
            <SelectTrigger id="major-chords" className="w-full">
              <SelectValue placeholder="Select major chord" />
            </SelectTrigger>
            <SelectContent>
              {majorChords.map((chord) => (
                <SelectItem key={chord.name} value={chord.name}>
                  {chord.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="minor-chords" className="text-sm font-medium">Minor Chords</Label>
          <Select 
            value={minorChords.some(c => c.name === selectedChord) ? selectedChord : ""} 
            onValueChange={(value) => {
              setSelectedChord(value);
              setSelectedVariation(0);
            }}
          >
            <SelectTrigger id="minor-chords" className="w-full">
              <SelectValue placeholder="Select minor chord" />
            </SelectTrigger>
            <SelectContent>
              {minorChords.map((chord) => (
                <SelectItem key={chord.name} value={chord.name}>
                  {chord.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="seventh-chords" className="text-sm font-medium">7th Chords</Label>
          <Select 
            value={seventhChords.some(c => c.name === selectedChord) ? selectedChord : ""} 
            onValueChange={(value) => {
              setSelectedChord(value);
              setSelectedVariation(0);
            }}
          >
            <SelectTrigger id="seventh-chords" className="w-full">
              <SelectValue placeholder="Select 7th chord" />
            </SelectTrigger>
            <SelectContent>
              {seventhChords.map((chord) => (
                <SelectItem key={chord.name} value={chord.name}>
                  {chord.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Variation Selector */}
      {currentChordData.variations.length > 1 && (
        <div className="space-y-3">
          <Label className="text-sm font-medium">Chord Variations</Label>
          <Select 
            value={selectedVariation.toString()} 
            onValueChange={(value) => setSelectedVariation(parseInt(value))}
          >
            <SelectTrigger className="w-full max-w-xs">
              <SelectValue placeholder="Select variation" />
            </SelectTrigger>
            <SelectContent>
              {currentChordData.variations.map((variation, index) => (
                <SelectItem key={index} value={index.toString()}>
                  Variation {index + 1} - {variation.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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