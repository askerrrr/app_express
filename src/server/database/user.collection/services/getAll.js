var getAll = async (collection) => await collection.find({}).exec();

export default getAll;
