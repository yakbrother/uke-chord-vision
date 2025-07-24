# Alt Ukulele - Interactive Chord Library

![Alt Ukulele App](src/assets/readme-hero.jpg)

A modern, interactive ukulele chord library app that supports multiple tunings and provides audio playback for each chord. Perfect for beginners learning their first chords or advanced players exploring alternative tunings.

## 🎵 Features

- **Multiple Tunings Support**: GCEA (Standard), EAEA, EACF#, and ADFB (Open D)
- **Interactive Chord Diagrams**: Visual representations of finger positions
- **Audio Playback**: Hear how each chord sounds with octave-accurate audio
- **Arpeggio Mode**: Play chords as arpeggios for learning individual notes
- **Comprehensive Chord Library**: Major, minor, sharp, and 7th chords for each tuning
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean, Modern UI**: Built with shadcn/ui components and Tailwind CSS

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful, accessible components
- **Vite** - Fast build tool and development server
- **Web Audio API** - Real-time audio synthesis
- **Lucide React** - Beautiful icons

## 📱 Demo

Visit the live app: [Alt Ukulele on Lovable](https://lovable.dev/projects/679f96b3-1ac5-48b8-bc88-dbbd74410082)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app running locally.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎸 How to Use

1. **Select a Tuning**: Choose from GCEA (standard), EAEA, EACF#, or ADFB tunings
2. **Browse Chords**: Scroll through the available chords for your selected tuning
3. **View Diagrams**: See finger positions on the interactive ukulele fretboard
4. **Play Audio**: Click the play button to hear the chord
5. **Try Arpeggio**: Use the arpeggio button to hear notes played individually

### Chord Diagram Reading
- **Dots**: Show where to place your fingers
- **Numbers**: Indicate which finger to use (1-4)
- **X**: String not played
- **0**: Open string (no finger needed)

## 🎵 Supported Tunings

| Tuning | Notes | Description |
|--------|-------|-------------|
| GCEA | G-C-E-A | Standard ukulele tuning |
| EAEA | E-A-E-A | Alternative tuning with octave variation |
| EACF# | E-A-C#-F# | Open E tuning |
| ADFB | A-D-F#-B | Open D tuning |

## 🔧 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── ChordLibrary.tsx    # Main chord display
│   ├── TuningSelector.tsx  # Tuning selection
│   └── UkuleleChordDiagram.tsx # Chord visualization
├── data/
│   └── chordData.ts    # Chord definitions for all tunings
├── utils/
│   ├── audioPlayer.ts  # Web Audio API integration
│   └── noteCalculator.ts # Music theory calculations
└── pages/
    └── Index.tsx       # Main app page
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-chord-tuning`
3. **Make your changes**: Add new tunings, chords, or features
4. **Test thoroughly**: Ensure audio playback works correctly
5. **Submit a pull request**: Describe your changes clearly

### Ideas for Contributions
- Add more alternative tunings
- Include chord variations and inversions
- Add chord progression suggestions
- Implement a tuner feature
- Add chord transition animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Bug Reports & Feature Requests

Found a bug or have an idea for a new feature? Please [open an issue](https://github.com/yourusername/alt-ukulele/issues) on GitHub.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - AI-powered development platform
- Icons by [Lucide](https://lucide.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Inspired by the ukulele community and alternative tuning enthusiasts

---

**Happy strumming! 🎵**
