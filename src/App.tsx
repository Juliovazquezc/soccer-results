import { useState, useEffect } from "react";
import "./App.css";
import { TeamSelector } from "./components/TeamSelector";
import type { Team } from "./data/teams";
import { popularTeams } from "./data/teams";

interface Match {
  homeTeam: Team;
  awayTeam: Team;
  score: {
    home: number;
    away: number;
  };
}

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [showTimeSetter, setShowTimeSetter] = useState(false);
  const [inputMinutes, setInputMinutes] = useState("");
  const [inputSeconds, setInputSeconds] = useState("");
  const [match, setMatch] = useState<Match>({
    homeTeam: popularTeams[7], // Real Madrid
    awayTeam: popularTeams[6], // Barcelona
    score: {
      home: 0,
      away: 0,
    },
  });

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const incrementScore = (team: "home" | "away") => {
    setMatch((prev) => ({
      ...prev,
      score: {
        ...prev.score,
        [team]: prev.score[team] + 1,
      },
    }));
  };

  const decrementScore = (team: "home" | "away") => {
    setMatch((prev) => ({
      ...prev,
      score: {
        ...prev.score,
        [team]: Math.max(0, prev.score[team] - 1),
      },
    }));
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const resetMatch = () => {
    setMatch((prev) => ({
      ...prev,
      score: { home: 0, away: 0 },
    }));
    resetTimer();
  };

  const updateHomeTeam = (team: Team) => {
    setMatch((prev) => ({ ...prev, homeTeam: team }));
  };

  const updateAwayTeam = (team: Team) => {
    setMatch((prev) => ({ ...prev, awayTeam: team }));
  };

  const setCustomTime = () => {
    const minutes = parseInt(inputMinutes) || 0;
    const seconds = parseInt(inputSeconds) || 0;
    const totalSeconds = minutes * 60 + seconds;
    setTime(totalSeconds);
    setShowTimeSetter(false);
    setInputMinutes("");
    setInputSeconds("");
  };

  const cancelTimeSetter = () => {
    setShowTimeSetter(false);
    setInputMinutes("");
    setInputSeconds("");
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Prevent shortcuts when typing in inputs
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case " ": // Spacebar - toggle timer
          event.preventDefault();
          setIsRunning(!isRunning);
          break;
        case "r": // R - reset timer
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            resetTimer();
          }
          break;
        case "q": // Q - increment home score
          incrementScore("home");
          break;
        case "w": // W - increment away score
          incrementScore("away");
          break;
        case "a": // A - decrement home score
          decrementScore("home");
          break;
        case "s": // S - decrement away score
          decrementScore("away");
          break;
        case "h": // H - toggle controls
          setShowControls(!showControls);
          break;
        case "?": // ? - toggle help
          setShowHelp(!showHelp);
          break;
        case "escape": // Escape - show controls
          setShowControls(true);
          setShowHelp(false);
          setShowTimeSetter(false);
          break;
        case "t": // T - toggle time setter
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            setShowTimeSetter(!showTimeSetter);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isRunning, showControls, showHelp, showTimeSetter]);

  return (
    <div className="overlay-container">
      {/* Toggle Controls Button */}
      <div className="overlay-controls">
        <button
          className="toggle-controls"
          onClick={() => setShowControls(!showControls)}
        >
          {showControls ? "👁️" : "⚙️"}
        </button>
        <button
          className="toggle-controls help-btn"
          onClick={() => setShowHelp(!showHelp)}
        >
          ❓
        </button>
      </div>

      {/* Main Scoreboard */}
      <div className="scoreboard">
        <div className="team home-team">
          <img
            src={match.homeTeam.crest}
            alt={match.homeTeam.name}
            className="team-crest"
            onError={(e) => {
              e.currentTarget.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iMjAiIGZpbGw9IiNkZGQiLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvcnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+PD88L3RleHQ+Cjwvc3ZnPg==";
            }}
          />
          <span className="team-name">{match.homeTeam.tla}</span>
        </div>

        <div className="score-section">
          <div className="score-display">
            <span className="score home-score">{match.score.home}</span>
            <span className="score-separator">-</span>
            <span className="score away-score">{match.score.away}</span>
          </div>
          <div className="timer">{formatTime(time)}</div>
        </div>

        <div className="team away-team">
          <span className="team-name">{match.awayTeam.tla}</span>
          <img
            src={match.awayTeam.crest}
            alt={match.awayTeam.name}
            className="team-crest"
            onError={(e) => {
              e.currentTarget.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iMjAiIGZpbGw9IiNkZGQiLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvcnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+PD88L3RleHQ+Cjwvc3ZnPg==";
            }}
          />
        </div>
      </div>

      {/* Control Panel */}
      {showControls && (
        <div className="controls">
          <div className="timer-controls">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`timer-btn ${isRunning ? "pause" : "play"}`}
            >
              {isRunning ? "⏸️" : "▶️"}
            </button>
            <button onClick={resetTimer} className="timer-btn reset">
              🔄
            </button>
            <button onClick={resetMatch} className="timer-btn reset">
              🗑️
            </button>
            <button
              onClick={() => setShowTimeSetter(!showTimeSetter)}
              className="timer-btn set-time"
            >
              ⏱️
            </button>
          </div>

          {/* Time Setter Panel */}
          {showTimeSetter && (
            <div className="time-setter">
              <h4>Establecer Tiempo</h4>
              <div className="time-inputs">
                <div className="input-group">
                  <label>Minutos</label>
                  <input
                    type="number"
                    min="0"
                    max="999"
                    value={inputMinutes}
                    onChange={(e) => setInputMinutes(e.target.value)}
                    placeholder="0"
                    className="time-input"
                  />
                </div>
                <div className="input-group">
                  <label>Segundos</label>
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={inputSeconds}
                    onChange={(e) => setInputSeconds(e.target.value)}
                    placeholder="0"
                    className="time-input"
                  />
                </div>
              </div>
              <div className="time-setter-buttons">
                <button onClick={setCustomTime} className="timer-btn set-time">
                  Establecer
                </button>
                <button onClick={cancelTimeSetter} className="timer-btn cancel">
                  Cancelar
                </button>
              </div>
            </div>
          )}

          <div className="team-selection">
            <TeamSelector
              selectedTeam={match.homeTeam}
              onTeamChange={updateHomeTeam}
              position="home"
            />
            <TeamSelector
              selectedTeam={match.awayTeam}
              onTeamChange={updateAwayTeam}
              position="away"
            />
          </div>

          <div className="score-controls">
            <div className="team-controls">
              <label>{match.homeTeam.tla}</label>
              <div className="score-buttons">
                <button onClick={() => decrementScore("home")}>-</button>
                <span className="current-score">{match.score.home}</span>
                <button onClick={() => incrementScore("home")}>+</button>
              </div>
            </div>
            <div className="team-controls">
              <label>{match.awayTeam.tla}</label>
              <div className="score-buttons">
                <button onClick={() => decrementScore("away")}>-</button>
                <span className="current-score">{match.score.away}</span>
                <button onClick={() => incrementScore("away")}>+</button>
              </div>
            </div>
          </div>

          {/* Time Setter */}
          <div className="time-setter">
            <button
              onClick={() => setShowTimeSetter(!showTimeSetter)}
              className="set-time-btn"
            >
              ⏱️
            </button>
            {showTimeSetter && (
              <div className="time-setter-controls">
                <div className="time-inputs">
                  <input
                    type="number"
                    value={inputMinutes}
                    onChange={(e) => setInputMinutes(e.target.value)}
                    placeholder="MM"
                    className="time-input"
                  />
                  <span>:</span>
                  <input
                    type="number"
                    value={inputSeconds}
                    onChange={(e) => setInputSeconds(e.target.value)}
                    placeholder="SS"
                    className="time-input"
                  />
                </div>
                <div className="time-setter-buttons">
                  <button onClick={setCustomTime} className="set-time-confirm">
                    ✔️
                  </button>
                  <button
                    onClick={cancelTimeSetter}
                    className="set-time-cancel"
                  >
                    ❌
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Help Panel */}
      {showHelp && (
        <div className="help-panel">
          <div className="help-content">
            <h3>⌨️ Keyboard Shortcuts</h3>
            <div className="shortcuts-grid">
              <div className="shortcut">
                <kbd>Space</kbd>
                <span>Toggle Timer</span>
              </div>
              <div className="shortcut">
                <kbd>Ctrl+R</kbd>
                <span>Reset Timer</span>
              </div>
              <div className="shortcut">
                <kbd>Ctrl+T</kbd>
                <span>Set Custom Time</span>
              </div>
              <div className="shortcut">
                <kbd>Q</kbd>
                <span>Home +1</span>
              </div>
              <div className="shortcut">
                <kbd>W</kbd>
                <span>Away +1</span>
              </div>
              <div className="shortcut">
                <kbd>A</kbd>
                <span>Home -1</span>
              </div>
              <div className="shortcut">
                <kbd>S</kbd>
                <span>Away -1</span>
              </div>
              <div className="shortcut">
                <kbd>H</kbd>
                <span>Toggle Controls</span>
              </div>
              <div className="shortcut">
                <kbd>?</kbd>
                <span>Toggle Help</span>
              </div>
              <div className="shortcut">
                <kbd>Esc</kbd>
                <span>Show Controls</span>
              </div>
            </div>
            <button className="close-help" onClick={() => setShowHelp(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
