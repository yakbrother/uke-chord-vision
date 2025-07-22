// Utility for calculating note names from fret positions

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Define base octaves for different tunings
const TUNING_OCTAVES: Record<string, number[]> = {
  'EAEA': [3, 3, 3, 4], // Second A is octave higher
  'GCEA': [4, 4, 4, 4], // Standard tuning
  'EACF': [3, 3, 4, 4], // E A C# F# tuning
  'ADFB': [3, 3, 4, 4]  // A D F# B tuning
};

export function calculateNote(openNote: string, fret: number | 'x'): string | null {
  if (fret === 'x' || fret === 0) return null;
  
  const openNoteIndex = NOTE_NAMES.indexOf(openNote);
  if (openNoteIndex === -1) return null;
  
  const noteIndex = (openNoteIndex + fret) % 12;
  return NOTE_NAMES[noteIndex];
}

export function getChordNotes(tuning: string[], frets: (number | 'x')[]): (string | null)[] {
  return frets.map((fret, index) => {
    if (fret === 'x') return null;
    if (fret === 0) return tuning[index];
    return calculateNote(tuning[index], fret);
  });
}

export function getChordNotesWithOctaves(tuningName: string, tuning: string[], frets: (number | 'x')[]): Array<{note: string | null, octave: number}> {
  const baseOctaves = TUNING_OCTAVES[tuningName] || [4, 4, 4, 4];
  
  return frets.map((fret, index) => {
    if (fret === 'x') return { note: null, octave: 4 };
    
    let octave = baseOctaves[index];
    let note: string | null;
    
    if (fret === 0) {
      note = tuning[index];
    } else {
      const openNoteIndex = NOTE_NAMES.indexOf(tuning[index]);
      if (openNoteIndex === -1) return { note: null, octave: 4 };
      
      const totalSemitones = openNoteIndex + fret;
      const noteIndex = totalSemitones % 12;
      const octaveOffset = Math.floor(totalSemitones / 12);
      
      note = NOTE_NAMES[noteIndex];
      octave += octaveOffset;
    }
    
    return { note, octave };
  });
}