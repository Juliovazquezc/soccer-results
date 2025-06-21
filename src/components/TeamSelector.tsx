import React from "react";
import type { Team } from "../data/teams";
import { popularTeams } from "../data/teams";
import "./TeamSelector.css";

interface TeamSelectorProps {
  selectedTeam: Team;
  onTeamChange: (team: Team) => void;
  position: "home" | "away";
}

export const TeamSelector: React.FC<TeamSelectorProps> = ({
  selectedTeam,
  onTeamChange,
  position,
}) => {
  return (
    <div className="team-selector">
      <label className="team-selector-label">
        {position === "home" ? "Local" : "Visitante"}
      </label>
      <select
        value={selectedTeam.id}
        onChange={(e) => {
          const team = popularTeams.find(
            (t) => t.id === parseInt(e.target.value)
          );
          if (team) onTeamChange(team);
        }}
        className="team-select"
      >
        {popularTeams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.shortName}
          </option>
        ))}
      </select>
      <div className="team-preview">
        <img
          src={selectedTeam.crest}
          alt={selectedTeam.name}
          className="team-preview-crest"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMTIiIGZpbGw9IiNkZGQiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj4/PC90ZXh0Pgo8L3N2Zz4=";
          }}
        />
        <span className="team-preview-name">{selectedTeam.tla}</span>
      </div>
    </div>
  );
};
