import {
  ADDTOCART,
  DECPRICE,
  FETCHITEMS,
  INCPRICE,
  REMOVEFROMCART,
} from "../Actions/ProductActions";

const initialState = {
  products: [],
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHITEMS:
      return {
        ...state,
        products: [...payload],
      };

    case ADDTOCART:
      const copyProductlist1 = [...state.products];

      //finding products in copyprodlist by id
      const result1 = copyProductlist1.filter(item => item.id == payload);

      console.log(result1);

      //settting incart and count to true and 1
      result1[0]["inCart"] = true;
      result1[0]["count"] = 1;

      result1[0]["total"] =
        Number(result1[0]["price"]) * Number(result1[0]["count"]);

      //finding index by payload=id
      const findProductIndex1 = copyProductlist1.findIndex(
        item => item.id == payload
      );

      //removing old product by index and adding new products
      copyProductlist1.splice(findProductIndex1, 1, ...result1);

      return {
        products: [...copyProductlist1],
      };

    case REMOVEFROMCART:
      const copyProductlist2 = [...state.products];

      //finding products in copyprodlist by id
      const result2 = copyProductlist2.filter(item => item.id == payload);

      //setting inCart and count field to false and 0
      result2[0]["inCart"] = false;
      result2[0]["count"] = 0;

      result2[0]["total"] =
        Number(result2[0]["price"]) * Number(result2[0]["count"]);

      //finding index by payload=id
      const findProductIndex2 = copyProductlist2.findIndex(
        item => item.id == payload
      );

      //removing old product by index and adding new products
      copyProductlist2.splice(findProductIndex2, 1, ...result2);

      return {
        products: [...copyProductlist2],
      };

    case INCPRICE:
      const copyProductlist3 = [...state.products];

      //here payload =id

      //finding products in copyprodlist by id
      const result3 = copyProductlist3.filter(item => item.id == payload);

      //increment count by 1
      result3[0]["count"] = Number(result3[0]["count"]) + 1;

      //cal total and set the total field value
      result3[0]["total"] =
        Number(result3[0]["price"]) * Number(result3[0]["count"]);

      //finding index by payload=id
      const findProductIndex3 = copyProductlist3.findIndex(
        item => item.id == payload
      );

      //removing old product by index and adding new products
      copyProductlist3.splice(findProductIndex3, 1, ...result3);
      return {
        products: [...copyProductlist3],
      };

    case DECPRICE:
      const copyProductlist4 = [...state.products];

      //here payload =id

      //finding products in copyprodlist by id
      const result4 = copyProductlist4.filter(item => item.id == payload);

      //increment count by 1
      result4[0]["count"] = Number(result4[0]["count"]) - 1;

      //cal total and set the total field value
      result4[0]["total"] =
        Number(result4[0]["price"]) * Number(result4[0]["count"]);

      //finding index by payload=id
      const findProductIndex4 = copyProductlist4.findIndex(
        item => item.id == payload
      );

      //removing old product by index and adding new products
      copyProductlist4.splice(findProductIndex4, 1, ...result4);
      return {
        products: [...copyProductlist4],
      };

    default:
      return state;
  }
};
