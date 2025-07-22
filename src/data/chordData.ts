// Chord data for different ukulele tunings

export interface ChordShape {
  frets: (number | 'x')[];
  fingers?: (number | null)[];
  name: string;
}

export interface Tuning {
  name: string;
  notes: string[];
  chords: Record<string, ChordShape[]>;
}

export const tunings: Record<string, Tuning> = {
  eacsharp: {
    name: "E A C# F# (EACF)",
    notes: ["E", "A", "C#", "F#"],
    chords: {
      "C": [
        { frets: [3, 2, 1, 1], fingers: [4, 3, 1, 2], name: "C" },
        { frets: [8, 7, 6, 6], fingers: [4, 3, 1, 2], name: "C (8th)" }
      ],
      "F": [
        { frets: [1, 3, 1, 2], fingers: [1, 4, 2, 3], name: "F" },
        { frets: [6, 8, 6, 7], fingers: [1, 4, 2, 3], name: "F (6th)" }
      ],
      "G": [
        { frets: [3, 5, 3, 4], fingers: [1, 4, 2, 3], name: "G" },
        { frets: [0, 2, 3, 4], fingers: [null, 1, 2, 3], name: "G" }
      ],
      "Am": [
        { frets: [2, 2, 1, 2], fingers: [2, 3, 1, 4], name: "Am" },
        { frets: [7, 7, 6, 7], fingers: [2, 3, 1, 4], name: "Am (7th)" }
      ],
      "Dm": [
        { frets: [5, 5, 3, 5], fingers: [2, 3, 1, 4], name: "Dm" },
        { frets: [0, 0, 3, 5], fingers: [null, null, 1, 2], name: "Dm" }
      ],
      "Em": [
        { frets: [0, 2, 0, 0], fingers: [null, 2, null, null], name: "Em" },
        { frets: [2, 4, 3, 4], fingers: [1, 3, 2, 4], name: "Em" }
      ],

      // Sharp Major Chords
      "A#": [
        { frets: [6, 6, 6, 6], fingers: [1, 2, 3, 4], name: "A#" },
        { frets: [1, 1, 8, 6], fingers: [1, 2, 4, 3], name: "A#" }
      ],
      "C#": [
        { frets: [6, 5, 4, 4], fingers: [4, 3, 1, 2], name: "C#" },
        { frets: [1, 0, 4, 4], fingers: [1, null, 3, 4], name: "C#" }
      ],
      "D#": [
        { frets: [8, 7, 6, 6], fingers: [4, 3, 1, 2], name: "D#" },
        { frets: [3, 2, 6, 6], fingers: [2, 1, 3, 4], name: "D#" }
      ],
      "F#": [
        { frets: [4, 6, 4, 0], fingers: [2, 4, 3, null], name: "F#" },
        { frets: [9, 11, 9, 10], fingers: [1, 4, 2, 3], name: "F#" }
      ],
      "G#": [
        { frets: [6, 8, 6, 7], fingers: [1, 4, 2, 3], name: "G#" },
        { frets: [1, 3, 6, 7], fingers: [1, 2, 3, 4], name: "G#" }
      ],

      // Sharp Minor Chords
      "A#m": [
        { frets: [5, 5, 4, 5], fingers: [2, 3, 1, 4], name: "A#m" },
        { frets: [0, 0, 4, 5], fingers: [null, null, 1, 2], name: "A#m" }
      ],
      "C#m": [
        { frets: [1, 1, 0, 1], fingers: [2, 3, null, 4], name: "C#m" },
        { frets: [6, 6, 5, 6], fingers: [2, 3, 1, 4], name: "C#m" }
      ],
      "D#m": [
        { frets: [3, 3, 2, 3], fingers: [2, 3, 1, 4], name: "D#m" },
        { frets: [8, 8, 7, 8], fingers: [2, 3, 1, 4], name: "D#m" }
      ],
      "F#m": [
        { frets: [2, 4, 2, 2], fingers: [1, 4, 2, 3], name: "F#m" },
        { frets: [7, 9, 7, 7], fingers: [1, 4, 2, 3], name: "F#m" }
      ],
      "G#m": [
        { frets: [4, 6, 4, 4], fingers: [1, 4, 2, 3], name: "G#m" },
        { frets: [9, 11, 9, 9], fingers: [1, 4, 2, 3], name: "G#m" }
      ],

      // Major 7th Chords
      "CMaj7": [
        { frets: [0, 0, 0, 2], fingers: [null, null, null, 2], name: "CMaj7" },
        { frets: [5, 4, 3, 2], fingers: [4, 3, 2, 1], name: "CMaj7" }
      ],
      "DMaj7": [
        { frets: [2, 1, 1, 1], fingers: [4, 1, 2, 3], name: "DMaj7" },
        { frets: [7, 6, 6, 6], fingers: [4, 1, 2, 3], name: "DMaj7" }
      ],
      "EMaj7": [
        { frets: [4, 3, 3, 3], fingers: [4, 1, 2, 3], name: "EMaj7" },
        { frets: [9, 8, 8, 8], fingers: [4, 1, 2, 3], name: "EMaj7" }
      ],
      "FMaj7": [
        { frets: [0, 2, 1, 0], fingers: [null, 3, 2, null], name: "FMaj7" },
        { frets: [5, 7, 6, 5], fingers: [1, 4, 3, 2], name: "FMaj7" }
      ],
      "GMaj7": [
        { frets: [2, 4, 3, 2], fingers: [1, 4, 3, 2], name: "GMaj7" },
        { frets: [7, 9, 8, 7], fingers: [1, 4, 3, 2], name: "GMaj7" }
      ],
      "AMaj7": [
        { frets: [4, 6, 5, 4], fingers: [1, 4, 3, 2], name: "AMaj7" },
        { frets: [9, 11, 10, 9], fingers: [1, 4, 3, 2], name: "AMaj7" }
      ],
      "BMaj7": [
        { frets: [6, 8, 7, 6], fingers: [1, 4, 3, 2], name: "BMaj7" },
        { frets: [1, 3, 2, 1], fingers: [1, 4, 3, 2], name: "BMaj7" }
      ],

      // Minor 7th Chords
      "Cm7": [
        { frets: [3, 3, 3, 3], fingers: [1, 2, 3, 4], name: "Cm7" },
        { frets: [8, 8, 8, 8], fingers: [1, 2, 3, 4], name: "Cm7" }
      ],
      "Dm7": [
        { frets: [5, 5, 5, 5], fingers: [1, 2, 3, 4], name: "Dm7" },
        { frets: [0, 0, 5, 5], fingers: [null, null, 1, 2], name: "Dm7" }
      ],
      "Em7": [
        { frets: [0, 2, 0, 2], fingers: [null, 1, null, 2], name: "Em7" },
        { frets: [7, 9, 7, 9], fingers: [1, 3, 2, 4], name: "Em7" }
      ],
      "Fm7": [
        { frets: [1, 3, 1, 1], fingers: [1, 4, 2, 3], name: "Fm7" },
        { frets: [6, 8, 6, 6], fingers: [1, 4, 2, 3], name: "Fm7" }
      ],
      "Gm7": [
        { frets: [3, 5, 3, 3], fingers: [1, 4, 2, 3], name: "Gm7" },
        { frets: [8, 10, 8, 8], fingers: [1, 4, 2, 3], name: "Gm7" }
      ],
      "Am7": [
        { frets: [0, 0, 0, 0], fingers: [null, null, null, null], name: "Am7" },
        { frets: [5, 7, 5, 5], fingers: [1, 4, 2, 3], name: "Am7" }
      ],
      "Bm7": [
        { frets: [2, 4, 2, 2], fingers: [1, 4, 2, 3], name: "Bm7" },
        { frets: [7, 9, 7, 7], fingers: [1, 4, 2, 3], name: "Bm7" }
      ],

      // Sharp Major 7th Chords
      "C#Maj7": [
        { frets: [1, 1, 1, 3], fingers: [1, 2, 3, 4], name: "C#Maj7" },
        { frets: [6, 5, 4, 3], fingers: [4, 3, 2, 1], name: "C#Maj7" }
      ],
      "D#Maj7": [
        { frets: [3, 2, 2, 2], fingers: [4, 1, 2, 3], name: "D#Maj7" },
        { frets: [8, 7, 7, 7], fingers: [4, 1, 2, 3], name: "D#Maj7" }
      ],
      "F#Maj7": [
        { frets: [1, 3, 2, 1], fingers: [1, 4, 3, 2], name: "F#Maj7" },
        { frets: [6, 8, 7, 6], fingers: [1, 4, 3, 2], name: "F#Maj7" }
      ],
      "G#Maj7": [
        { frets: [3, 5, 4, 3], fingers: [1, 4, 3, 2], name: "G#Maj7" },
        { frets: [8, 10, 9, 8], fingers: [1, 4, 3, 2], name: "G#Maj7" }
      ],
      "A#Maj7": [
        { frets: [5, 7, 6, 5], fingers: [1, 4, 3, 2], name: "A#Maj7" },
        { frets: [0, 2, 1, 0], fingers: [null, 3, 2, null], name: "A#Maj7" }
      ],

      // Sharp Minor 7th Chords
      "C#m7": [
        { frets: [4, 4, 4, 4], fingers: [1, 2, 3, 4], name: "C#m7" },
        { frets: [9, 9, 9, 9], fingers: [1, 2, 3, 4], name: "C#m7" }
      ],
      "D#m7": [
        { frets: [6, 6, 6, 6], fingers: [1, 2, 3, 4], name: "D#m7" },
        { frets: [1, 1, 6, 6], fingers: [1, 2, 3, 4], name: "D#m7" }
      ],
      "F#m7": [
        { frets: [2, 4, 2, 2], fingers: [1, 4, 2, 3], name: "F#m7" },
        { frets: [7, 9, 7, 7], fingers: [1, 4, 2, 3], name: "F#m7" }
      ],
      "G#m7": [
        { frets: [4, 6, 4, 4], fingers: [1, 4, 2, 3], name: "G#m7" },
        { frets: [9, 11, 9, 9], fingers: [1, 4, 2, 3], name: "G#m7" }
      ],
      "A#m7": [
        { frets: [1, 3, 1, 1], fingers: [1, 4, 2, 3], name: "A#m7" },
        { frets: [6, 8, 6, 6], fingers: [1, 4, 2, 3], name: "A#m7" }
      ]
    }
  },
  standard: {
    name: "Standard (GCEA)",
    notes: ["G", "C", "E", "A"],
    chords: {
      "C": [
        { frets: [0, 0, 0, 3], fingers: [null, null, null, 3], name: "C" },
        { frets: [5, 4, 3, 3], fingers: [4, 3, 1, 2], name: "C (5th)" }
      ],
      "F": [
        { frets: [2, 0, 1, 0], fingers: [2, null, 1, null], name: "F" },
        { frets: [2, 0, 1, 3], fingers: [2, null, 1, 4], name: "F" }
      ],
      "G": [
        { frets: [0, 2, 3, 2], fingers: [null, 1, 3, 2], name: "G" },
        { frets: [0, 2, 3, 5], fingers: [null, 1, 2, 4], name: "G" }
      ],
      "Am": [
        { frets: [2, 0, 0, 0], fingers: [2, null, null, null], name: "Am" },
        { frets: [2, 4, 0, 0], fingers: [1, 3, null, null], name: "Am" }
      ],
      "Dm": [
        { frets: [2, 2, 1, 0], fingers: [2, 3, 1, null], name: "Dm" },
        { frets: [7, 7, 6, 5], fingers: [3, 4, 2, 1], name: "Dm (7th)" }
      ],
      "Em": [
        { frets: [0, 4, 3, 2], fingers: [null, 4, 3, 2], name: "Em" },
        { frets: [9, 7, 8, 7], fingers: [3, 1, 4, 2], name: "Em (9th)" }
      ],

      // Sharp Major Chords
      "A#": [
        { frets: [1, 1, 1, 1], fingers: [1, 2, 3, 4], name: "A#" },
        { frets: [3, 2, 1, 1], fingers: [4, 2, 1, 3], name: "A#" }
      ],
      "C#": [
        { frets: [1, 1, 1, 4], fingers: [1, 2, 3, 4], name: "C#" },
        { frets: [6, 5, 4, 4], fingers: [4, 3, 1, 2], name: "C# (6th)" }
      ],
      "D#": [
        { frets: [0, 3, 3, 1], fingers: [null, 3, 4, 1], name: "D#" },
        { frets: [3, 3, 3, 6], fingers: [1, 2, 3, 4], name: "D# (3rd)" }
      ],
      "F#": [
        { frets: [3, 1, 2, 1], fingers: [4, 1, 3, 2], name: "F#" },
        { frets: [3, 1, 2, 4], fingers: [3, 1, 2, 4], name: "F#" }
      ],
      "G#": [
        { frets: [1, 3, 4, 3], fingers: [1, 2, 4, 3], name: "G#" },
        { frets: [1, 3, 4, 6], fingers: [1, 2, 3, 4], name: "G#" }
      ],

      // Sharp Minor Chords
      "A#m": [
        { frets: [3, 1, 1, 1], fingers: [4, 1, 2, 3], name: "A#m" },
        { frets: [3, 5, 1, 1], fingers: [2, 4, 1, 3], name: "A#m" }
      ],
      "C#m": [
        { frets: [1, 1, 0, 4], fingers: [2, 3, null, 4], name: "C#m" },
        { frets: [8, 8, 7, 6], fingers: [3, 4, 2, 1], name: "C#m (8th)" }
      ],
      "D#m": [
        { frets: [3, 3, 2, 1], fingers: [3, 4, 2, 1], name: "D#m" },
        { frets: [8, 8, 7, 6], fingers: [3, 4, 2, 1], name: "D#m (8th)" }
      ],
      "F#m": [
        { frets: [3, 1, 1, 1], fingers: [4, 1, 2, 3], name: "F#m" },
        { frets: [3, 1, 1, 4], fingers: [3, 1, 2, 4], name: "F#m" }
      ],
      "G#m": [
        { frets: [1, 3, 4, 2], fingers: [1, 3, 4, 2], name: "G#m" },
        { frets: [10, 8, 9, 8], fingers: [3, 1, 4, 2], name: "G#m (10th)" }
      ],

      // Major 7th Chords
      "Cmaj7": [
        { frets: [0, 0, 0, 2], fingers: [null, null, null, 2], name: "Cmaj7" },
        { frets: [5, 4, 3, 2], fingers: [4, 3, 2, 1], name: "Cmaj7 (5th)" }
      ],
      "Dmaj7": [
        { frets: [2, 2, 2, 4], fingers: [1, 2, 3, 4], name: "Dmaj7" },
        { frets: [2, 4, 2, 4], fingers: [1, 3, 2, 4], name: "Dmaj7" }
      ],
      "Emaj7": [
        { frets: [1, 1, 0, 2], fingers: [1, 2, null, 3], name: "Emaj7" },
        { frets: [4, 4, 4, 6], fingers: [1, 2, 3, 4], name: "Emaj7 (4th)" }
      ],
      "Fmaj7": [
        { frets: [2, 4, 1, 3], fingers: [2, 4, 1, 3], name: "Fmaj7" },
        { frets: [5, 5, 5, 7], fingers: [1, 2, 3, 4], name: "Fmaj7 (5th)" }
      ],
      "Gmaj7": [
        { frets: [0, 2, 2, 2], fingers: [null, 1, 2, 3], name: "Gmaj7" },
        { frets: [0, 2, 2, 5], fingers: [null, 1, 2, 4], name: "Gmaj7" }
      ],
      "Amaj7": [
        { frets: [2, 1, 0, 0], fingers: [2, 1, null, null], name: "Amaj7" },
        { frets: [2, 4, 4, 4], fingers: [1, 2, 3, 4], name: "Amaj7" }
      ],
      "Bmaj7": [
        { frets: [4, 3, 2, 2], fingers: [4, 3, 1, 2], name: "Bmaj7" },
        { frets: [4, 6, 6, 6], fingers: [1, 2, 3, 4], name: "Bmaj7" }
      ],

      // Minor 7th Chords
      "Cm7": [
        { frets: [3, 3, 3, 3], fingers: [1, 2, 3, 4], name: "Cm7" },
        { frets: [3, 4, 3, 6], fingers: [1, 2, 3, 4], name: "Cm7" }
      ],
      "Dm7": [
        { frets: [2, 2, 1, 3], fingers: [2, 3, 1, 4], name: "Dm7" },
        { frets: [7, 7, 6, 8], fingers: [2, 3, 1, 4], name: "Dm7 (7th)" }
      ],
      "Em7": [
        { frets: [0, 2, 0, 2], fingers: [null, 1, null, 2], name: "Em7" },
        { frets: [0, 4, 3, 5], fingers: [null, 3, 2, 4], name: "Em7" }
      ],
      "Fm7": [
        { frets: [1, 3, 1, 3], fingers: [1, 3, 2, 4], name: "Fm7" },
        { frets: [6, 6, 6, 6], fingers: [1, 2, 3, 4], name: "Fm7 (6th)" }
      ],
      "Gm7": [
        { frets: [0, 2, 1, 1], fingers: [null, 3, 1, 2], name: "Gm7" },
        { frets: [3, 2, 1, 1], fingers: [4, 2, 1, 3], name: "Gm7" }
      ],
      "Am7": [
        { frets: [0, 0, 0, 0], fingers: [null, null, null, null], name: "Am7" },
        { frets: [2, 4, 3, 3], fingers: [1, 4, 2, 3], name: "Am7" }
      ],
      "Bm7": [
        { frets: [2, 2, 2, 2], fingers: [1, 2, 3, 4], name: "Bm7" },
        { frets: [4, 2, 2, 2], fingers: [4, 1, 2, 3], name: "Bm7" }
      ],

      // Sharp 7th Chords
      "A#maj7": [
        { frets: [3, 2, 1, 0], fingers: [3, 2, 1, null], name: "A#maj7" },
        { frets: [3, 5, 5, 5], fingers: [1, 2, 3, 4], name: "A#maj7" }
      ],
      "A#m7": [
        { frets: [1, 1, 1, 1], fingers: [1, 2, 3, 4], name: "A#m7" },
        { frets: [3, 1, 1, 1], fingers: [4, 1, 2, 3], name: "A#m7" }
      ],
      "C#maj7": [
        { frets: [1, 1, 1, 3], fingers: [1, 2, 3, 4], name: "C#maj7" },
        { frets: [6, 5, 4, 3], fingers: [4, 3, 2, 1], name: "C#maj7 (6th)" }
      ],
      "C#m7": [
        { frets: [1, 1, 0, 2], fingers: [2, 3, null, 4], name: "C#m7" },
        { frets: [6, 6, 6, 6], fingers: [1, 2, 3, 4], name: "C#m7 (6th)" }
      ],
      "D#maj7": [
        { frets: [0, 3, 3, 0], fingers: [null, 2, 3, null], name: "D#maj7" },
        { frets: [3, 3, 3, 5], fingers: [1, 2, 3, 4], name: "D#maj7" }
      ],
      "D#m7": [
        { frets: [3, 3, 2, 4], fingers: [2, 3, 1, 4], name: "D#m7" },
        { frets: [8, 8, 7, 9], fingers: [2, 3, 1, 4], name: "D#m7 (8th)" }
      ],
      "F#maj7": [
        { frets: [3, 1, 2, 0], fingers: [3, 1, 2, null], name: "F#maj7" },
        { frets: [3, 5, 6, 6], fingers: [1, 2, 3, 4], name: "F#maj7" }
      ],
      "F#m7": [
        { frets: [2, 1, 2, 2], fingers: [3, 1, 2, 4], name: "F#m7" },
        { frets: [2, 4, 2, 5], fingers: [1, 3, 2, 4], name: "F#m7" }
      ],
      "G#maj7": [
        { frets: [1, 3, 4, 2], fingers: [1, 2, 4, 3], name: "G#maj7" },
        { frets: [5, 3, 4, 3], fingers: [4, 1, 3, 2], name: "G#maj7" }
      ],
      "G#m7": [
        { frets: [1, 3, 4, 1], fingers: [1, 3, 4, 2], name: "G#m7" },
        { frets: [4, 3, 4, 4], fingers: [2, 1, 3, 4], name: "G#m7" }
      ]
    }
  },
  eaea: {
    name: "EAEA",
    notes: ["E", "A", "E", "A"],
    chords: {
      // Major Chords - Practical Voicings (max 3-4 fret span)
      "A": [
        { frets: [0, 0, 0, 0], fingers: [null, null, null, null], name: "A (open)" },
        { frets: [2, 2, 2, 2], fingers: [1, 2, 3, 4], name: "A (2nd pos)" },
        { frets: ['x', 0, 'x', 4], fingers: [null, null, null, 4], name: "A (root+3rd)" }
      ],
      "B": [
        { frets: [2, 2, 2, 2], fingers: [1, 2, 3, 4], name: "B" },
        { frets: ['x', 2, 'x', 0], fingers: [null, 2, null, null], name: "B (dyad)" }
      ],
      "C": [
        { frets: ['x', 3, 3, 3], fingers: [null, 1, 2, 3], name: "C" },
        { frets: [3, 3, 3, 'x'], fingers: [1, 2, 3, null], name: "C (alt)" },
        { frets: ['x', 3, 'x', 7], fingers: [null, 1, null, 4], name: "C (root+3rd)" }
      ],
      "D": [
        { frets: [2, 0, 2, 2], fingers: [2, null, 3, 4], name: "D" },
        { frets: ['x', 0, 'x', 2], fingers: [null, null, null, 2], name: "D (root+3rd)" },
        { frets: [2, 'x', 2, 'x'], fingers: [1, null, 2, null], name: "D (root+5th)" }
      ],
      "E": [
        { frets: [0, 'x', 0, 'x'], fingers: [null, null, null, null], name: "E (open)" },
        { frets: [0, 2, 0, 4], fingers: [null, 1, null, 3], name: "E" },
        { frets: ['x', 'x', 0, 4], fingers: [null, null, null, 4], name: "E (root+3rd)" }
      ],
      "F": [
        { frets: [1, 3, 1, 1], fingers: [1, 4, 2, 3], name: "F" },
        { frets: ['x', 3, 'x', 1], fingers: [null, 3, null, 1], name: "F (root+3rd)" }
      ],
      "G": [
        { frets: [3, 'x', 3, 'x'], fingers: [1, null, 2, null], name: "G (open)" },
        { frets: ['x', 'x', 3, 7], fingers: [null, null, 1, 4], name: "G (root+3rd)" }
      ],

      // Minor Chords - Practical Voicings (max 3-4 fret span)
      "Am": [
        { frets: [0, 0, 0, 3], fingers: [null, null, null, 3], name: "Am" },
        { frets: [0, 3, 0, 3], fingers: [null, 2, null, 3], name: "Am (alt)" },
        { frets: ['x', 0, 'x', 3], fingers: [null, null, null, 3], name: "Am (root+3rd)" }
      ],
      "Bm": [
        { frets: [2, 2, 2, 0], fingers: [2, 3, 4, null], name: "Bm" },
        { frets: ['x', 2, 'x', 0], fingers: [null, 2, null, null], name: "Bm (dyad)" }
      ],
      "Cm": [
        { frets: ['x', 3, 3, 1], fingers: [null, 3, 4, 1], name: "Cm" },
        { frets: [3, 3, 3, 1], fingers: [2, 3, 4, 1], name: "Cm (full)" }
      ],
      "Dm": [
        { frets: [2, 0, 2, 1], fingers: [3, null, 4, 1], name: "Dm" },
        { frets: ['x', 0, 'x', 1], fingers: [null, null, null, 1], name: "Dm (root+3rd)" }
      ],
      "Em": [
        { frets: [0, 'x', 0, 3], fingers: [null, null, null, 3], name: "Em" },
        { frets: [0, 2, 0, 3], fingers: [null, 2, null, 3], name: "Em (full)" }
      ],
      "Fm": [
        { frets: [1, 3, 1, 0], fingers: [1, 4, 2, null], name: "Fm" },
        { frets: ['x', 3, 'x', 0], fingers: [null, 3, null, null], name: "Fm (dyad)" }
      ],
      "Gm": [
        { frets: [3, 'x', 3, 1], fingers: [3, null, 4, 1], name: "Gm" },
        { frets: ['x', 'x', 3, 1], fingers: [null, null, 3, 1], name: "Gm (dyad)" }
      ],

      // Power Chords and Simple Dyads
      "A5": [
        { frets: [0, 0, 0, 'x'], fingers: [null, null, null, null], name: "A5 (root+5th)" },
        { frets: ['x', 0, 'x', 4], fingers: [null, null, null, 4], name: "A (root+3rd)" }
      ],
      "D5": [
        { frets: ['x', 0, 'x', 'x'], fingers: [null, null, null, null], name: "D5 (root only)" },
        { frets: ['x', 0, 'x', 2], fingers: [null, null, null, 2], name: "D (root+3rd)" }
      ],
      "E5": [
        { frets: [0, 'x', 0, 'x'], fingers: [null, null, null, null], name: "E5 (root+5th)" },
        { frets: [0, 'x', 'x', 4], fingers: [null, null, null, 4], name: "E (root+3rd)" }
      ],

      // Sharp Major Chords
      "A#": [
        { frets: [1, 1, 1, 1], fingers: [1, 2, 3, 4], name: "A#" },
        { frets: ['x', 1, 'x', 'x'], fingers: [null, 1, null, null], name: "A# (root)" }
      ],
      "C#": [
        { frets: [4, 4, 4, 4], fingers: [1, 2, 3, 4], name: "C#" },
        { frets: ['x', 4, 'x', 'x'], fingers: [null, 1, null, null], name: "C# (root)" }
      ],
      "D#": [
        { frets: [1, 'x', 1, 1], fingers: [1, null, 2, 3], name: "D#" },
        { frets: ['x', 'x', 1, 1], fingers: [null, null, 1, 2], name: "D# (dyad)" }
      ],
      "F#": [
        { frets: [2, 4, 2, 2], fingers: [1, 4, 2, 3], name: "F#" },
        { frets: ['x', 4, 'x', 2], fingers: [null, 3, null, 1], name: "F# (root+3rd)" }
      ],
      "G#": [
        { frets: [4, 'x', 4, 'x'], fingers: [1, null, 2, null], name: "G#" },
        { frets: ['x', 'x', 4, 'x'], fingers: [null, null, 1, null], name: "G# (root)" }
      ],

      // Sharp Minor Chords
      "A#m": [
        { frets: [1, 1, 1, 4], fingers: [1, 2, 3, 4], name: "A#m" },
        { frets: ['x', 1, 'x', 4], fingers: [null, 1, null, 4], name: "A#m (root+3rd)" }
      ],
      "C#m": [
        { frets: [4, 4, 4, 2], fingers: [3, 4, 2, 1], name: "C#m" },
        { frets: ['x', 4, 'x', 2], fingers: [null, 3, null, 1], name: "C#m (root+3rd)" }
      ],
      "D#m": [
        { frets: [1, 'x', 1, 0], fingers: [2, null, 3, null], name: "D#m" },
        { frets: ['x', 'x', 1, 0], fingers: [null, null, 2, null], name: "D#m (dyad)" }
      ],
      "F#m": [
        { frets: [2, 4, 2, 1], fingers: [2, 4, 3, 1], name: "F#m" },
        { frets: ['x', 4, 'x', 1], fingers: [null, 4, null, 1], name: "F#m (root+3rd)" }
      ],
      "G#m": [
        { frets: [4, 'x', 4, 2], fingers: [3, null, 4, 1], name: "G#m" },
        { frets: ['x', 'x', 4, 2], fingers: [null, null, 3, 1], name: "G#m (dyad)" }
      ],

      // Major 7th Chords
      "Amaj7": [
        { frets: [0, 0, 0, 1], fingers: [null, null, null, 1], name: "Amaj7" },
        { frets: ['x', 0, 'x', 1], fingers: [null, null, null, 1], name: "Amaj7 (dyad)" }
      ],
      "Bmaj7": [
        { frets: [2, 2, 2, 3], fingers: [1, 2, 3, 4], name: "Bmaj7" },
        { frets: ['x', 2, 'x', 3], fingers: [null, 1, null, 2], name: "Bmaj7 (dyad)" }
      ],
      "Cmaj7": [
        { frets: ['x', 3, 3, 4], fingers: [null, 1, 2, 3], name: "Cmaj7" },
        { frets: ['x', 3, 'x', 4], fingers: [null, 1, null, 2], name: "Cmaj7 (dyad)" }
      ],
      "Dmaj7": [
        { frets: [2, 0, 2, 3], fingers: [2, null, 3, 4], name: "Dmaj7" },
        { frets: ['x', 0, 'x', 3], fingers: [null, null, null, 3], name: "Dmaj7 (dyad)" }
      ],
      "Emaj7": [
        { frets: [0, 2, 0, 1], fingers: [null, 3, null, 1], name: "Emaj7" },
        { frets: ['x', 2, 'x', 1], fingers: [null, 2, null, 1], name: "Emaj7 (dyad)" }
      ],
      "Fmaj7": [
        { frets: [1, 3, 1, 2], fingers: [1, 4, 2, 3], name: "Fmaj7" },
        { frets: ['x', 3, 'x', 2], fingers: [null, 2, null, 1], name: "Fmaj7 (dyad)" }
      ],
      "Gmaj7": [
        { frets: [3, 'x', 3, 4], fingers: [2, null, 3, 4], name: "Gmaj7" },
        { frets: ['x', 'x', 3, 4], fingers: [null, null, 1, 2], name: "Gmaj7 (dyad)" }
      ],

      // Minor 7th Chords
      "Am7": [
        { frets: [0, 0, 0, 0], fingers: [null, null, null, null], name: "Am7" },
        { frets: [0, 3, 0, 0], fingers: [null, 3, null, null], name: "Am7 (alt)" }
      ],
      "Bm7": [
        { frets: [2, 2, 2, 2], fingers: [1, 2, 3, 4], name: "Bm7" },
        { frets: ['x', 2, 'x', 2], fingers: [null, 1, null, 2], name: "Bm7 (dyad)" }
      ],
      "Cm7": [
        { frets: ['x', 3, 3, 3], fingers: [null, 1, 2, 3], name: "Cm7" },
        { frets: [3, 3, 3, 3], fingers: [1, 2, 3, 4], name: "Cm7 (full)" }
      ],
      "Dm7": [
        { frets: [2, 0, 2, 0], fingers: [2, null, 3, null], name: "Dm7" },
        { frets: ['x', 0, 'x', 0], fingers: [null, null, null, null], name: "Dm7 (open)" }
      ],
      "Em7": [
        { frets: [0, 'x', 0, 0], fingers: [null, null, null, null], name: "Em7" },
        { frets: [0, 2, 0, 0], fingers: [null, 2, null, null], name: "Em7 (alt)" }
      ],
      "Fm7": [
        { frets: [1, 3, 1, 1], fingers: [1, 4, 2, 3], name: "Fm7" },
        { frets: ['x', 3, 'x', 1], fingers: [null, 3, null, 1], name: "Fm7 (dyad)" }
      ],
      "Gm7": [
        { frets: [3, 'x', 3, 3], fingers: [1, null, 2, 3], name: "Gm7" },
        { frets: ['x', 'x', 3, 3], fingers: [null, null, 1, 2], name: "Gm7 (dyad)" }
      ],

      // Sharp 7th Chords
      "A#maj7": [
        { frets: [1, 1, 1, 2], fingers: [1, 2, 3, 4], name: "A#maj7" },
        { frets: ['x', 1, 'x', 2], fingers: [null, 1, null, 2], name: "A#maj7 (dyad)" }
      ],
      "A#m7": [
        { frets: [1, 1, 1, 1], fingers: [1, 2, 3, 4], name: "A#m7" },
        { frets: ['x', 1, 'x', 1], fingers: [null, 1, null, 2], name: "A#m7 (dyad)" }
      ],
      "C#maj7": [
        { frets: [4, 4, 4, 'x'], fingers: [1, 2, 3, null], name: "C#maj7" },
        { frets: ['x', 4, 'x', 'x'], fingers: [null, 1, null, null], name: "C#maj7 (root)" }
      ],
      "C#m7": [
        { frets: [4, 4, 4, 4], fingers: [1, 2, 3, 4], name: "C#m7" },
        { frets: ['x', 4, 'x', 4], fingers: [null, 1, null, 2], name: "C#m7 (dyad)" }
      ],
      "D#maj7": [
        { frets: [1, 'x', 1, 2], fingers: [1, null, 2, 4], name: "D#maj7" },
        { frets: ['x', 'x', 1, 2], fingers: [null, null, 1, 2], name: "D#maj7 (dyad)" }
      ],
      "D#m7": [
        { frets: [1, 'x', 1, 1], fingers: [1, null, 2, 3], name: "D#m7" },
        { frets: ['x', 'x', 1, 1], fingers: [null, null, 1, 2], name: "D#m7 (dyad)" }
      ],
      "F#maj7": [
        { frets: [2, 4, 2, 3], fingers: [1, 4, 2, 3], name: "F#maj7" },
        { frets: ['x', 4, 'x', 3], fingers: [null, 2, null, 1], name: "F#maj7 (dyad)" }
      ],
      "F#m7": [
        { frets: [2, 4, 2, 2], fingers: [1, 4, 2, 3], name: "F#m7" },
        { frets: ['x', 4, 'x', 2], fingers: [null, 3, null, 1], name: "F#m7 (dyad)" }
      ],
      "G#maj7": [
        { frets: [4, 'x', 4, 'x'], fingers: [1, null, 2, null], name: "G#maj7" },
        { frets: ['x', 'x', 4, 'x'], fingers: [null, null, 1, null], name: "G#maj7 (root)" }
      ],
      "G#m7": [
        { frets: [4, 'x', 4, 4], fingers: [1, null, 2, 3], name: "G#m7" },
        { frets: ['x', 'x', 4, 4], fingers: [null, null, 1, 2], name: "G#m7 (dyad)" }
      ]
    }
  },
  openC: {
    name: "Open C (CGEG)",
    notes: ["C", "G", "E", "G"],
    chords: {
      "C": [
        { frets: [0, 0, 0, 0], fingers: [null, null, null, null], name: "C" },
        { frets: [3, 0, 0, 0], fingers: [3, null, null, null], name: "C" }
      ],
      "F": [
        { frets: [0, 1, 0, 1], fingers: [null, 1, null, 2], name: "F" },
        { frets: [5, 6, 5, 6], fingers: [1, 2, 3, 4], name: "F (5th)" }
      ],
      "G": [
        { frets: [0, 0, 2, 0], fingers: [null, null, 2, null], name: "G" },
        { frets: [7, 0, 2, 0], fingers: [4, null, 2, null], name: "G" }
      ],
      "Am": [
        { frets: [3, 2, 0, 2], fingers: [3, 2, null, 4], name: "Am" },
        { frets: [8, 7, 5, 7], fingers: [3, 2, 1, 4], name: "Am (8th)" }
      ],
      "Dm": [
        { frets: [0, 2, 1, 2], fingers: [null, 2, 1, 3], name: "Dm" },
        { frets: [5, 7, 6, 7], fingers: [1, 3, 2, 4], name: "Dm (5th)" }
      ],
      "Em": [
        { frets: [3, 4, 0, 4], fingers: [2, 3, null, 4], name: "Em" },
        { frets: [8, 9, 5, 9], fingers: [2, 3, 1, 4], name: "Em (8th)" }
      ],

      // Sharp Major Chords
      "A#": [
        { frets: [1, 1, 3, 1], fingers: [1, 2, 4, 3], name: "A#" },
        { frets: [6, 6, 8, 6], fingers: [1, 2, 4, 3], name: "A# (6th)" }
      ],
      "C#": [
        { frets: [1, 0, 1, 1], fingers: [2, null, 3, 4], name: "C#" },
        { frets: [4, 3, 4, 4], fingers: [2, 1, 3, 4], name: "C#" }
      ],
      "D#": [
        { frets: [3, 2, 3, 3], fingers: [2, 1, 3, 4], name: "D#" },
        { frets: [8, 7, 8, 8], fingers: [2, 1, 3, 4], name: "D# (8th)" }
      ],
      "F#": [
        { frets: [1, 2, 1, 2], fingers: [1, 3, 2, 4], name: "F#" },
        { frets: [6, 7, 6, 7], fingers: [1, 3, 2, 4], name: "F# (6th)" }
      ],
      "G#": [
        { frets: [1, 1, 3, 1], fingers: [1, 2, 4, 3], name: "G#" },
        { frets: [8, 1, 3, 1], fingers: [4, 1, 3, 2], name: "G#" }
      ],

      // Sharp Minor Chords
      "A#m": [
        { frets: [1, 1, 2, 1], fingers: [1, 2, 4, 3], name: "A#m" },
        { frets: [6, 6, 7, 6], fingers: [1, 2, 4, 3], name: "A#m (6th)" }
      ],
      "C#m": [
        { frets: [1, 0, 0, 1], fingers: [2, null, null, 3], name: "C#m" },
        { frets: [4, 3, 3, 4], fingers: [2, 1, 3, 4], name: "C#m" }
      ],
      "D#m": [
        { frets: [3, 2, 2, 3], fingers: [3, 1, 2, 4], name: "D#m" },
        { frets: [8, 7, 7, 8], fingers: [3, 1, 2, 4], name: "D#m (8th)" }
      ],
      "F#m": [
        { frets: [1, 2, 0, 2], fingers: [1, 3, null, 4], name: "F#m" },
        { frets: [6, 7, 5, 7], fingers: [1, 3, 2, 4], name: "F#m (6th)" }
      ],
      "G#m": [
        { frets: [1, 1, 2, 1], fingers: [1, 2, 4, 3], name: "G#m" },
        { frets: [4, 4, 5, 4], fingers: [1, 2, 4, 3], name: "G#m" }
      ],

      // Major 7th Chords
      "Cmaj7": [
        { frets: [0, 0, 0, 2], fingers: [null, null, null, 2], name: "Cmaj7" },
        { frets: [3, 0, 0, 2], fingers: [3, null, null, 2], name: "Cmaj7" }
      ],
      "Dmaj7": [
        { frets: [2, 2, 2, 2], fingers: [1, 2, 3, 4], name: "Dmaj7" },
        { frets: [7, 7, 7, 7], fingers: [1, 2, 3, 4], name: "Dmaj7 (7th)" }
      ],
      "Emaj7": [
        { frets: [1, 1, 2, 1], fingers: [1, 2, 4, 3], name: "Emaj7" },
        { frets: [4, 4, 5, 4], fingers: [1, 2, 4, 3], name: "Emaj7" }
      ],
      "Fmaj7": [
        { frets: [0, 1, 0, 3], fingers: [null, 1, null, 3], name: "Fmaj7" },
        { frets: [5, 6, 5, 8], fingers: [1, 2, 3, 4], name: "Fmaj7 (5th)" }
      ],
      "Gmaj7": [
        { frets: [0, 0, 2, 2], fingers: [null, null, 2, 3], name: "Gmaj7" },
        { frets: [7, 0, 2, 2], fingers: [4, null, 2, 3], name: "Gmaj7" }
      ],
      "Amaj7": [
        { frets: [2, 1, 0, 1], fingers: [3, 2, null, 1], name: "Amaj7" },
        { frets: [7, 6, 5, 6], fingers: [3, 2, 1, 4], name: "Amaj7 (7th)" }
      ],
      "Bmaj7": [
        { frets: [2, 2, 4, 2], fingers: [1, 2, 4, 3], name: "Bmaj7" },
        { frets: [7, 7, 9, 7], fingers: [1, 2, 4, 3], name: "Bmaj7 (7th)" }
      ],

      // Minor 7th Chords
      "Cm7": [
        { frets: [0, 0, 1, 0], fingers: [null, null, 1, null], name: "Cm7" },
        { frets: [3, 3, 4, 3], fingers: [1, 2, 4, 3], name: "Cm7" }
      ],
      "Dm7": [
        { frets: [0, 2, 1, 0], fingers: [null, 3, 2, null], name: "Dm7" },
        { frets: [5, 7, 6, 5], fingers: [1, 4, 3, 2], name: "Dm7 (5th)" }
      ],
      "Em7": [
        { frets: [3, 4, 0, 2], fingers: [3, 4, null, 2], name: "Em7" },
        { frets: [8, 9, 5, 7], fingers: [3, 4, 1, 2], name: "Em7 (8th)" }
      ],
      "Fm7": [
        { frets: [0, 1, 0, 1], fingers: [null, 2, null, 3], name: "Fm7" },
        { frets: [5, 6, 5, 6], fingers: [1, 3, 2, 4], name: "Fm7 (5th)" }
      ],
      "Gm7": [
        { frets: [0, 0, 1, 0], fingers: [null, null, 1, null], name: "Gm7" },
        { frets: [3, 3, 4, 3], fingers: [1, 2, 4, 3], name: "Gm7" }
      ],
      "Am7": [
        { frets: [3, 2, 0, 0], fingers: [3, 2, null, null], name: "Am7" },
        { frets: [8, 7, 5, 5], fingers: [4, 3, 1, 2], name: "Am7 (8th)" }
      ],
      "Bm7": [
        { frets: [2, 2, 2, 2], fingers: [1, 2, 3, 4], name: "Bm7" },
        { frets: [7, 7, 7, 7], fingers: [1, 2, 3, 4], name: "Bm7 (7th)" }
      ],

      // Sharp 7th Chords
      "A#maj7": [
        { frets: [1, 1, 3, 3], fingers: [1, 2, 3, 4], name: "A#maj7" },
        { frets: [6, 6, 8, 8], fingers: [1, 2, 3, 4], name: "A#maj7 (6th)" }
      ],
      "A#m7": [
        { frets: [1, 1, 2, 0], fingers: [2, 3, 4, null], name: "A#m7" },
        { frets: [6, 6, 7, 5], fingers: [2, 3, 4, 1], name: "A#m7 (6th)" }
      ],
      "C#maj7": [
        { frets: [1, 0, 1, 3], fingers: [1, null, 2, 4], name: "C#maj7" },
        { frets: [4, 3, 4, 6], fingers: [2, 1, 3, 4], name: "C#maj7" }
      ],
      "C#m7": [
        { frets: [1, 0, 0, 0], fingers: [1, null, null, null], name: "C#m7" },
        { frets: [4, 3, 3, 3], fingers: [4, 1, 2, 3], name: "C#m7" }
      ],
      "D#maj7": [
        { frets: [3, 2, 3, 5], fingers: [2, 1, 3, 4], name: "D#maj7" },
        { frets: [8, 7, 8, 10], fingers: [2, 1, 3, 4], name: "D#maj7 (8th)" }
      ],
      "D#m7": [
        { frets: [3, 2, 2, 2], fingers: [4, 1, 2, 3], name: "D#m7" },
        { frets: [8, 7, 7, 7], fingers: [4, 1, 2, 3], name: "D#m7 (8th)" }
      ],
      "F#maj7": [
        { frets: [1, 2, 1, 4], fingers: [1, 2, 3, 4], name: "F#maj7" },
        { frets: [6, 7, 6, 9], fingers: [1, 2, 3, 4], name: "F#maj7 (6th)" }
      ],
      "F#m7": [
        { frets: [1, 2, 0, 0], fingers: [2, 4, null, null], name: "F#m7" },
        { frets: [6, 7, 5, 5], fingers: [2, 4, 1, 3], name: "F#m7 (6th)" }
      ],
      "G#maj7": [
        { frets: [1, 1, 3, 5], fingers: [1, 2, 3, 4], name: "G#maj7" },
        { frets: [4, 4, 6, 8], fingers: [1, 2, 3, 4], name: "G#maj7" }
      ],
      "G#m7": [
        { frets: [1, 1, 2, 0], fingers: [2, 3, 4, null], name: "G#m7" },
        { frets: [4, 4, 5, 3], fingers: [2, 3, 4, 1], name: "G#m7" }
      ]
    }
  }
};

export const getAllChords = (tuningKey: string): { name: string; variations: ChordShape[] }[] => {
  const tuning = tunings[tuningKey];
  if (!tuning) return [];
  
  return Object.entries(tuning.chords).map(([name, variations]) => ({
    name,
    variations
  }));
};

export const getChord = (tuningKey: string, chordName: string, variation: number = 0): ChordShape | null => {
  const tuning = tunings[tuningKey];
  if (!tuning || !tuning.chords[chordName]) return null;
  
  const variations = tuning.chords[chordName];
  return variations[variation] || variations[0] || null;
};