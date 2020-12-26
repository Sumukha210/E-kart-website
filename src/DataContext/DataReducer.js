export const FETCHITEMS = "FETCHITEMES";
export const ADDITEMS = "ADDITEMS";
export const REMOVEITEMS = "REMOVEITEMS";

export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case FETCHITEMS:
      return [...payload];

    case ADDITEMS:
      const copyProductlist = [...state];

      //finding products in copyprodlist by id
      const result = copyProductlist.filter(item => item.id == payload);

      //setting inCart value to opposit of inCart value
      result[0]["inCart"] = !result[0]["inCart"];

      //finding index by payload=id
      const findProductIndex = copyProductlist.findIndex(
        item => item.id == payload
      );

      //removing old product by index and adding new products
      copyProductlist.splice(findProductIndex, 1, ...result);
      return [...copyProductlist];

    default:
      return state;
  }
};
