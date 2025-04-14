var getAll = async (collection) => await collection.find({}).toArray();

export default getAll;
