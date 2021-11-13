import { useState, useEffect } from 'react';

// styles
import './TripList.css';

export default function TripList() {
   const [trips, setTrips] = useState([]);
   const [url, setUrl] = useState('http://localhost:3000/trips');
   console.log(trips);

   // fetch data once with useEffect
   useEffect(() => {
      fetch(url)
         .then((response) => {
            return response.json();
         })
         .then((data) => {
            setTrips(data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, [url]);

   return (
      <div className="trip-list">
         <h2>Trip List</h2>
         <ul>
            {trips.map((trip, i) => {
               return (
                  <li key={trip.id}>
                     <h3>{trip.title}</h3>
                     <p>{trip.price}</p>
                  </li>
               );
            })}
         </ul>
         <div className="filters">
            <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>European Trips</button>
            <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
         </div>
      </div>
   );
}

/*  // fetch trips from json data with async await
   const fetchFunc = async () => {
      const response = await fetch('http://localhost:3000/trips');
      const data = await response.json();
      console.log(data);
      setTrips(data);
   };

   fetchFunc(); asdasdgit asdasdasd */
