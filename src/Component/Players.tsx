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

        <div className='container mx-auto px-4 lg:px-0'>
            <div className='my-6 flex flex-col gap-4 sm:my-8 sm:flex-row sm:items-center sm:justify-between lg:my-10'>
                <h1 className='text-xl font-semibold sm:text-2xl'>{buttonType === "Available" ? 'Available Players' : 'Selected Players'}</h1>
                <div className='flex w-full sm:w-auto'>
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