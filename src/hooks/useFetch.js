import { useState, useEffect } from "react";

export function useFetch(apiFn) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await apiFn();

        if (!res.success) {
          setError("Something Went Wrong. Try Again.");
          return;
        }

        // console.log("api respnse: ", res);

        setData(res.data || []);
      } catch (error) {
        console.log("Error in useFetch hook: ", error);
      } finally {
        setLoading(false);
        setError("Something Went Wrong. Try Again.");
      }
    };
    fetchData();
  }, []);

  return { isLoading, error, data };
}
