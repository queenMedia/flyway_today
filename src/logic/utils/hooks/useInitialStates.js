const useInitialStates = (initialData) => {
  const initialState = initialData.reduce((acc, _, index) => {
    acc[index.toString()] = (index === 0);
    return acc;
  }, {});

  return {
    initialState
  };
}

export default useInitialStates;
