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