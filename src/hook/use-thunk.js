import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";

const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const doFetchUsers = useCallback(() => {
    setIsLoading(true);
    dispatch(thunk())
      .unwrap()
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [thunk, dispatch]);

  return [doFetchUsers, isLoading, error];
};

export default useThunk;
