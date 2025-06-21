# ⚽ Football Scoreboard Overlay for OBS

A minimalist, transparent football scoreboard overlay perfect for streaming on OBS Studio. Features real-time scoring, timer functionality, and team logos from popular football clubs and national teams.

## ✨ Features

- **Minimalist Design**: Clean, transparent overlay that won't distract from your content
- **Real-time Timer**: Start, pause, and reset timer for match duration
- **Team Selection**: Choose from 25+ popular teams (Premier League, La Liga, Serie A, Bundesliga, Ligue 1, National Teams)
- **Score Management**: Easy increment/decrement buttons for both teams
- **Team Logos**: Official team crests from football-data.org API
- **OBS-Ready**: Transparent background perfect for OBS browser source
- **Responsive Design**: Works on different screen sizes
- **Toggle Controls**: Hide/show controls during streaming

## 🚀 Quick Start

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Open in browser**: Navigate to `http://localhost:5174`

## 🎥 Setting up in OBS Studio

### Method 1: Browser Source (Recommended)

1. Open OBS Studio
2. Add a new **Browser Source** to your scene
3. Set the URL to: `http://localhost:5174`
4. Set Width: `1920`, Height: `1080` (or your stream resolution)
5. Check "Shutdown source when not visible"
6. Check "Refresh browser when scene becomes active"

### Method 2: Window Capture

1. Open the overlay in your web browser
2. Press F11 for fullscreen mode
3. In OBS, add **Window Capture** source
4. Select your browser window
5. Use **Chroma Key** filter to remove any background

## 🎮 Controls

### Overlay Controls

- **▶️/⏸️ Button**: Start/pause the match timer
- **🔄 Button**: Reset timer to 00:00
- **🗑️ Button**: Reset entire match (scores and timer)
- **👁️/⚙️ Button**: Toggle controls visibility (top-right corner)
- **❓ Button**: Show keyboard shortcuts help

### Keyboard Shortcuts ⌨️

- **Space**: Toggle timer (play/pause)
- **Ctrl+R**: Reset timer
- **Q**: Increment home team score
- **W**: Increment away team score
- **A**: Decrement home team score
- **S**: Decrement away team score
- **H**: Toggle controls visibility
- **?**: Show/hide help panel
- **Escape**: Show controls and hide help

### Team Management

- Use dropdown menus to select home and away teams
- Team crests are automatically loaded from the football-data.org API
- Fallback placeholder shown if team logo fails to load

### Score Management

- **+ Button**: Increment team score
- **- Button**: Decrement team score (minimum 0)
- Current scores displayed in real-time

## 🎨 Customization

### Colors and Styling

Edit `src/App.css` to customize:

- **Background colors**: Modify `rgba()` values
- **Timer color**: Change `.timer` styles
- **Team colors**: Adjust `.team` styles
- **Button styles**: Modify `.timer-btn` and related classes

### Team Data

Add more teams by editing `src/data/teams.ts`:

```typescript
{
  id: 123,
  name: "Your Team Name",
  shortName: "Short Name",
  tla: "TLA",
  crest: "https://url-to-team-logo.png"
}
```

## 🏗️ Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder. You can serve these files using any web server.

## 📱 Usage Tips

1. **Hide Controls**: Click the eye icon (👁️) to hide controls during streaming
2. **Keyboard Shortcuts**: Use keyboard shortcuts for quick control during live streams
3. **Help Panel**: Press ? to view all keyboard shortcuts
4. **Multiple Scenes**: Create different OBS scenes for different match-ups
5. **Timer Management**: Start timer when match begins, pause during breaks
6. **Team Selection**: Choose from 25+ popular teams before starting your stream
7. **Backup Controls**: Always have a way to control the overlay from OBS if needed

## 🔄 API Information

This overlay uses team logos from **football-data.org**, which provides:

- High-quality team crests
- Reliable CDN hosting
- Consistent image formats
- Wide coverage of international teams

If team logos don't load, the overlay shows a placeholder symbol.

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features (backdrop-filter, grid, flexbox)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Streaming! ⚽🎮**
