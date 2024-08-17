import React from 'react';

const NextEvents = () => {
  const nextEventsData = [
    { date: '2023-03-15', event: 'Mercavi Open', location: 'Paris, France' },
    { date: '2023-03-22', event: 'Mercavi Masters', location: 'London, UK' },
    { date: '2023-03-29', event: 'Mercavi Championship', location: 'New York, USA' },
    // more next events data
  ];

  return (
    <section id="next-events">
      <h2 className='mr-2 '>Next Events</h2>
      <ul>
        {nextEventsData.map((event, index) => (
          <li key={index}>
            <span>{event.date}</span>
            <span>{event.event}</span>
            <span>{event.location}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NextEvents;