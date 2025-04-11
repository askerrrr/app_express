async function getAll() {
  return await this.find({}).toArray();
}

export default getAll;
