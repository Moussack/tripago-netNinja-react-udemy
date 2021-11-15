import { useState, useEffect } from 'react';

export const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);

         try {
            const response = await fetch(url);
            console.log(response);
            if (!response.ok) {
               // manually throw error to be catched by the catch block.
               throw new Error(response.statusText);
            }

            // if there's an error, the code below will not run..
            // bcuz the error will be catched by the catch block..
            // instead the code inside the catch block will be run.
            const json = await response.json();
            setLoading(false);
            setData(json);
            setError(false);
         } catch (error) {
            setLoading(false);
            setError(true);
            console.log(error.message);
         }
      };

      fetchData();
   }, [url]);

   return { data, loading, error };
};
