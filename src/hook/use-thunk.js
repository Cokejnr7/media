import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";

const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    },
    [thunk, dispatch]
  );

  return [runThunk, isLoading, error];
};

export default useThunk;
