import type { PlayerType } from "../type";
import Player from "./Player";

interface AvailablePlayersProps {
    players: PlayerType[];
    coin: number;
    setCoin: React.Dispatch<React.SetStateAction<number>>;
    selectedPlayers: PlayerType[];
    setSelectedPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
}

const AvailablePlayers = ({ players, coin, setCoin, setSelectedPlayers, selectedPlayers }: AvailablePlayersProps) => {
    console.log(players, "players available");

    return (
        <div>
            <div className="grid grid-cols-3 gap-10 justify-items-center">
                {players.map((player) => <Player selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin} key={player.id} player={player}></Player>)}
            </div>
        </div>
    );
};

export default AvailablePlayers;