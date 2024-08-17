import React from 'react';

const Ranking = () => {
  const rankingData = [
    { player: 'Mark Mabonga', points:  1200, wins: 10, losses: 2 },
    { player: 'James muritu', points: 1000, wins: 9, losses: 3 },
    { player: 'Ronnie Sila', points: 900, wins: 8, losses: 4 },
    // more ranking data
  ];

  return (
    <section id="ranking">
      
      <h2 className='text-green-700 text-3xl font-bold mb-4'>Mercavi rankings </h2>
      <table>
        <thead>
          <tr>
            <th>Player </th>
            <th>Points </th>
            <th>Wins </th>
            <th>Losses </th>
          </tr>
        </thead>
        <tbody>
          {rankingData.map((player, index) => (
            <tr key={index}>
              <td>{player.player}</td>
              <td>{player.points}</td>
              <td>{player.wins}</td>
              <td>{player.losses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Ranking;