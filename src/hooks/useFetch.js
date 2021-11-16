import { useState, useEffect } from 'react';

export const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      const controller = new AbortController();

      const fetchData = async () => {
         setLoading(true);

         try {
            const response = await fetch(url, { signal: controller.signal });
            console.log(response);
            if (!response.ok) {
               // created our own error to be catched by the catch block.
               // if there's an error, the code below will not run, instead the code inside catch block no.2 will run.
               // bcuz the error will be catched by the catch block..
               throw new Error(response.statusText);
            }

            // If there's NO error, the code below will run instead
            const json = await response.json();
            setLoading(false);
            setData(json);
            setError(false);
         } catch (error) {
            // 1. Error comes from aborting fetch request.
            if (error.name === 'AbortError') {
               console.log('fetch aborted');
            }

            // 2. Error comes from response variable will run below
            // i.e the response.ok is false (i.e misstyped url)
            setLoading(false);
            setError(true);
            console.log(error.message);
         }
      };

      fetchData();

      return () => {
         // cleanup
         controller.abort();
      };
   }, [url]);

   return { data, loading, error };
};
