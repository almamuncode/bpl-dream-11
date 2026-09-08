import { use, useState } from 'react';
import type { PlayerType } from '../type';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

interface PlayersProps {
    playersPromise: Promise<PlayerType[]>;
    coin: number;
    setCoin: React.Dispatch<React.SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {
    const players = use(playersPromise)
    const [buttonType, setButtonType] = useState("Available")
    const [selectedPlayers, setSelectedPlayers] = useState<PlayerType[]>([]);

    const handleUpdateBtn = (type: "Available" | "Selected") => {
        setButtonType(type)
    }


    return (

        <div className='container mx-auto'>
            <div className='flex justify-between my-10'>
                <h1 className='text-2xl'>{buttonType === "Available" ? <h1>Available Players</h1> : <h1>Selected Players</h1>}</h1>
                <div>
                    <button onClick={() => handleUpdateBtn("Available")} className={`btn ${buttonType === "Available" ? "btn-success" : ""} rounded-r-none`}>Available</button>
                    <button onClick={() => handleUpdateBtn("Selected")} className={`btn  ${buttonType === "Selected" ? "btn-success" : ""} rounded-l-none`}
                    >Selected</button>
                </div>
            </div>
            {buttonType === "Available" ? <AvailablePlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} players={players} coin={coin} setCoin={setCoin}></AvailablePlayers> :

                <SelectedPlayers coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />}

        </div>
    );
};

export default Players;