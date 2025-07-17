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
      ]
    }
  },
  eaea: {
    name: "EAEA",
    notes: ["E", "A", "E", "A"],
    chords: {
      "A": [
        { frets: [0, 0, 0, 0], fingers: [null, null, null, null], name: "A" },
        { frets: [2, 2, 2, 2], fingers: [1, 2, 3, 4], name: "A (2nd)" }
      ],
      "D": [
        { frets: [2, 2, 2, 2], fingers: [1, 2, 3, 4], name: "D" },
        { frets: [7, 7, 7, 7], fingers: [1, 2, 3, 4], name: "D (7th)" }
      ],
      "E": [
        { frets: [0, 2, 0, 2], fingers: [null, 1, null, 2], name: "E" },
        { frets: [4, 6, 4, 6], fingers: [1, 3, 2, 4], name: "E (4th)" }
      ],
      "Bm": [
        { frets: [2, 0, 2, 0], fingers: [2, null, 3, null], name: "Bm" },
        { frets: [4, 2, 4, 2], fingers: [3, 1, 4, 2], name: "Bm (4th)" }
      ],
      "C#m": [
        { frets: [4, 2, 4, 2], fingers: [3, 1, 4, 2], name: "C#m" },
        { frets: [6, 4, 6, 4], fingers: [3, 1, 4, 2], name: "C#m (6th)" }
      ],
      "F#m": [
        { frets: [1, 1, 1, 1], fingers: [1, 2, 3, 4], name: "F#m" },
        { frets: [6, 6, 6, 6], fingers: [1, 2, 3, 4], name: "F#m (6th)" }
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