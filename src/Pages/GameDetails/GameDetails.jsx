import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import GameDetailsCard from '../../Components/GameDetailsCard/GameDetailsCard';

const GameDetails = () => {
    const {id} = useParams();
    const gameData = useLoaderData();
    // console.log(id, gameData);

    const [gameDataDetails, setGameDataDetails] = useState([]);

    useEffect(()=>{
        const findGameData = gameData.find(game => game.id == id);
        setGameDataDetails(findGameData);
        document.title = findGameData.title;
    }, [gameData, id]);

    // console.log(gameDataDetails);


    return (
        <div className='w-11/12 mx-auto my-10'>
              <GameDetailsCard key={gameDataDetails.id} gameDataDetails={gameDataDetails}></GameDetailsCard>
        </div>
    );
};

export default GameDetails;