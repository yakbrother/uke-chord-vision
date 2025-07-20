// Utility for calculating note names from fret positions

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

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