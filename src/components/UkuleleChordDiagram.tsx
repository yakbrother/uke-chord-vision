import { cn } from "@/lib/utils";
import { getChordNotes, getChordNotesWithOctaves } from "@/utils/noteCalculator";
import { audioPlayer } from "@/utils/audioPlayer";
import { Button } from "@/components/ui/button";
import { Play, Volume2 } from "lucide-react";

interface ChordDiagram {
  frets: (number | 'x')[];  // Fret numbers for each string (0 = open, x = muted)
  fingers?: (number | null)[];  // Finger numbers (1-4) for each string
  name: string;
  tuning: string[];
  tuningName?: string; // Add tuning name for octave calculation
}

interface UkuleleChordDiagramProps {
  chord: ChordDiagram;
  className?: string;
}

export const UkuleleChordDiagram = ({ chord, className }: UkuleleChordDiagramProps) => {
  const maxFret = Math.max(...chord.frets.filter(f => f !== 'x' && f > 0) as number[], 3);
  const minFret = Math.min(...chord.frets.filter(f => f !== 'x' && f > 0) as number[], 1);
  const startFret = minFret > 3 ? minFret : 1;
  const endFret = Math.max(startFret + 3, maxFret);
  const fretRange = Array.from({ length: endFret - startFret + 1 }, (_, i) => startFret + i);
  
  const chordNotes = getChordNotes(chord.tuning, chord.frets);
  const chordNotesWithOctaves = chord.tuningName ? 
    getChordNotesWithOctaves(chord.tuningName, chord.tuning, chord.frets) : 
    chordNotes.map(note => ({ note, octave: 4 }));
  
  const playChord = () => {
    if (chord.tuningName) {
      audioPlayer.playChordWithOctaves(chordNotesWithOctaves);
    } else {
      audioPlayer.playChord(chordNotes);
    }
  };
  
  const playArpeggio = () => {
    if (chord.tuningName) {
      audioPlayer.playChordWithOctaves(chordNotesWithOctaves, true);
    } else {
      audioPlayer.playChord(chordNotes, true);
    }
  };

  return (
    <div className={cn("flex flex-col items-center space-y-4", className)}>
      {/* Chord Name and Play Buttons */}
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-bold text-foreground">{chord.name}</h3>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={playChord}
            className="flex items-center gap-1"
          >
            <Play className="w-3 h-3" />
            Chord
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={playArpeggio}
            className="flex items-center gap-1"
          >
            <Volume2 className="w-3 h-3" />
            Arp
          </Button>
        </div>
      </div>
      
      {/* Fret Position Indicator */}
      {startFret > 1 && (
        <div className="text-sm text-muted-foreground">
          {startFret}fr
        </div>
      )}
      
      {/* Chord Diagram */}
      <div className="relative bg-gradient-wood rounded-lg p-4 shadow-lg">
        <svg width="160" height="200" viewBox="0 0 160 200" className="overflow-visible">
          {/* Fret Lines */}
          {fretRange.map((fret, index) => (
            <line
              key={fret}
              x1="20"
              y1={40 + index * 30}
              x2="140"
              y2={40 + index * 30}
              stroke="hsl(var(--ukulele-fret))"
              strokeWidth={fret === startFret ? "3" : "2"}
            />
          ))}
          
          {/* String Lines */}
          {[0, 1, 2, 3].map((string) => (
            <line
              key={string}
              x1={30 + string * 30}
              y1="25"
              x2={30 + string * 30}
              y2={40 + (fretRange.length - 1) * 30}
              stroke="hsl(var(--ukulele-string))"
              strokeWidth="2"
            />
          ))}
          
          {/* Tuning Labels */}
          {chord.tuning.map((note, index) => (
            <text
              key={index}
              x={30 + index * 30}
              y="20"
              textAnchor="middle"
              className="fill-foreground text-sm font-medium"
            >
              {note}
            </text>
          ))}
          
          {/* Fret Positions and Finger Numbers */}
          {chord.frets.map((fret, stringIndex) => {
            if (fret === 'x') {
              // Muted string
              return (
                <g key={stringIndex}>
                  <text
                    x={30 + stringIndex * 30}
                    y="185"
                    textAnchor="middle"
                    className="fill-destructive text-lg font-bold"
                  >
                    ×
                  </text>
                </g>
              );
            } else if (fret === 0) {
              // Open string
              return (
                <g key={stringIndex}>
                  <circle
                    cx={30 + stringIndex * 30}
                    cy="185"
                    r="8"
                    fill="none"
                    stroke="hsl(var(--chord-finger))"
                    strokeWidth="2"
                  />
                  <text
                    x={30 + stringIndex * 30}
                    y="189"
                    textAnchor="middle"
                    className="fill-chord-finger text-xs font-bold"
                  >
                    O
                  </text>
                </g>
              );
            } else {
              // Fretted note
              const fretPosition = fret - startFret;
              const yPosition = 55 + fretPosition * 30;
              const finger = chord.fingers?.[stringIndex];
              const noteName = chordNotes[stringIndex];
              
              return (
                <g key={stringIndex}>
                  <circle
                    cx={30 + stringIndex * 30}
                    cy={yPosition}
                    r="10"
                    fill="hsl(var(--chord-finger))"
                    stroke="hsl(var(--chord-highlight))"
                    strokeWidth="2"
                  />
                  {finger && (
                    <text
                      x={30 + stringIndex * 30}
                      y={yPosition + 4}
                      textAnchor="middle"
                      className="fill-primary-foreground text-sm font-bold"
                    >
                      {finger}
                    </text>
                  )}
                  {/* Note name above the fretted position */}
                  {noteName && (
                    <text
                      x={30 + stringIndex * 30}
                      y={yPosition - 15}
                      textAnchor="middle"
                      className="fill-accent-foreground text-xs font-medium"
                    >
                      {noteName}
                    </text>
                  )}
                </g>
              );
            }
          })}
        </svg>
      </div>
      
      {/* Fingering Pattern Display with Notes */}
      <div className="flex space-x-2 text-sm">
        {chord.frets.map((fret, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-muted-foreground">{chord.tuning[index]}</span>
            <span className="font-mono font-bold text-foreground">
              {fret === 'x' ? '×' : fret === 0 ? '0' : fret}
            </span>
            <span className="text-xs text-accent-foreground font-medium">
              {chordNotes[index] || (fret === 'x' ? '—' : chord.tuning[index])}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};