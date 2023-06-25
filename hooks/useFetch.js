import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = function () {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/quotes/random");
      setData(response.data[0]);
      console.log(response.data[0]);
    } catch (err) {
      setError(err);
      console.log(err);
      alert("there is an error");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { isLoading, error, data, refetch };
};
