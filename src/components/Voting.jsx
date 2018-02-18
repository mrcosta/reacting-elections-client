import React from 'react';

const Voting = ({pair}) => (
   <div className="voting">
     {pair.map(entry =>
       <button key={entry}>
         <h1>{entry}</h1>
       </button>
     )}
   </div>
);

export default Voting;
