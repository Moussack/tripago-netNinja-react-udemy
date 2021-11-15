import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

// styles
import './TripList.css';

export default function TripList() {
   const [url, setUrl] = useState('http://localhost:3000/trips');
   const { data, loading, error } = useFetch(url);
   console.log(data);

   return (
      <div className="trip-list">
         <h2>Trip List</h2>
         {loading && <div>Loading Trips..</div>}
         {error && <div>Error Loading Trips..</div>}
         <ul>
            {data &&
               data.map((trip) => {
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

   fetchFunc(); asdasdgit asdasdasd  test asdasd*/

//sreras test astre
