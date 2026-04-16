const dataCache = new Map();

const expensiveTask = (id) => {
  console.log("Ran the expensive task for: ", id);

  return {
    id: id,
    data: `Some data for id: ${id}`,
    timestamp: new Date().getTime(),
  };
};

const getData = (id) => {
  if (dataCache.has(id)) {
    console.log("Cache HIT for id: ", id);
    return dataCache.get(id);
  }

  console.log("Cache MISS for id: ", id);
  const data = expensiveTask(id);

  dataCache.set(id, data);

  return data;
};

console.log(dataCache);

console.log(getData(123));
console.log(getData(123));

console.log(dataCache);
