import React from 'react';

const Results = () => {
  const resultsData = [
    { date: '2023-02-20 ',  player1: 'Novak Djokovic', player2: 'Rafael Nadal', score: '6-4, 6-2' },
    { date: '2023-02-22', player1: 'Roger Federer', player2: 'Andy Murray', score: '7-6, 6-3' },
    { date: '2023-02-25', player1: 'Serena Williams', player2: 'Naomi Osaka', score: '6-1, 6-4' },
    // more results data
  ];

  return (
    <section id="results">
      <h2 className='text-green-500 '>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((result, index) => (
            <tr key={index}>
              <td>{result.date}</td>
              <td>{result.player1}</td>
              <td>{result.player2}</td>
              <td>{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Results;