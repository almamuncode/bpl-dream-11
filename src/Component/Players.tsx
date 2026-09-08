import React, { use } from 'react';
import type { PlayerType } from '../type';
import Player from './Player';
import AvailablePlayers from './AvailablePlayers';

interface PlayersProps {
    playersPromise: Promise<PlayerType[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
    const players = use(playersPromise)

    return (

        <div className='container mx-auto'>
            <div className='flex justify-between my-10'>
                <h1 className='text-2xl'>Available Players</h1>
            <div>
                <button className='btn btn-success rounded-r-none'>Available</button>
                <button className='btn rounded-l-none'>Selected</button>
            </div>
            </div>
            <AvailablePlayers players={players}></AvailablePlayers>
            
        </div>
    );
};

export default Players;