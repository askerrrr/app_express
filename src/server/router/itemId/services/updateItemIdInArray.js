var updateItemIdInArray = async (index, newItemId, items) => {
  items[index].id = newItemId;

  return items;
};

export default updateItemIdInArray;
