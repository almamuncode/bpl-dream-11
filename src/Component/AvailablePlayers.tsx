import React from "react";
import type { PlayerType } from "../type";
import Player from "./Player";

interface AvailablePlayersProps {
    players: PlayerType[];
}

const AvailablePlayers = ({ players }: AvailablePlayersProps) => {
    console.log(players, "players available");

    return (
        <div>
            <div className="grid grid-cols-3 gap-10">
                {players.map((player) => <Player key={player.id} player={player}></Player>)}
            </div>
        </div>
    );
};

export default AvailablePlayers;