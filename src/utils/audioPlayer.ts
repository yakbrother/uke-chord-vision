// Audio utility for playing ukulele chord sounds

class AudioPlayer {
  private audioContext: AudioContext | null = null;
  private isPlaying = false;

  private async initAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  private getNoteFrequency(note: string, octave: number = 4): number {
    const noteMap: Record<string, number> = {
      'C': 261.63, 'C#': 277.18, 'D': 293.66, 'D#': 311.13,
      'E': 329.63, 'F': 349.23, 'F#': 369.99, 'G': 392.00,
      'G#': 415.30, 'A': 440.00, 'A#': 466.16, 'B': 493.88
    };
    
    const baseFreq = noteMap[note] || 440;
    return baseFreq * Math.pow(2, octave - 4);
  }

  private async playNote(frequency: number, duration: number, delay: number = 0) {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime + delay);
    oscillator.type = 'sine';
    
    // Envelope for more natural sound
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime + delay);
    gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + delay + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + delay + duration);
    
    oscillator.start(this.audioContext.currentTime + delay);
    oscillator.stop(this.audioContext.currentTime + delay + duration);
  }

  async playChord(notes: (string | null)[], arpeggiate: boolean = false) {
    if (this.isPlaying) return;
    
    try {
      this.isPlaying = true;
      await this.initAudioContext();

      const validNotes = notes.filter(note => note !== null) as string[];
      const duration = arpeggiate ? 0.8 : 1.5;
      
      if (arpeggiate) {
        // Play notes in sequence
        for (let i = 0; i < validNotes.length; i++) {
          const frequency = this.getNoteFrequency(validNotes[i]);
          await this.playNote(frequency, duration, i * 0.15);
        }
      } else {
        // Play all notes together
        validNotes.forEach(note => {
          const frequency = this.getNoteFrequency(note);
          this.playNote(frequency, duration);
        });
      }
      
      // Reset playing state after sound finishes
      setTimeout(() => {
        this.isPlaying = false;
      }, (arpeggiate ? validNotes.length * 150 + duration * 1000 : duration * 1000));
      
    } catch (error) {
      console.error('Audio playback failed:', error);
      this.isPlaying = false;
    }
  }

  stop() {
    if (this.audioContext) {
      this.audioContext.suspend();
    }
    this.isPlaying = false;
  }
}

export const audioPlayer = new AudioPlayer();