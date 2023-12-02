export const workoutFetchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": '23b801426bmsh7b1c1ff1f41f7aap17fed2jsn3be253cb1a0d',
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
  },
};

export const fetchWorkout = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
