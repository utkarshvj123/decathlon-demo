import {
  FETCH_PRODUCTS_LIST,
  ADD_TO_CART,
  DELETE_FROM_CART,
  SET_QUANTITY,
  EMPTY_CART,
} from "../actions/actionType";

import {
  tshirts,
  shorts,
  shoes,
  pants,
  bag,
  snorkelingmask,
  camp,
} from "../../../assets";

const INITIAL_STATE = {
  loader: false,
  products_list: [],
  products_in_cart: [],
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case `${FETCH_PRODUCTS_LIST}_PENDING`: {
      return {
        ...state,
        loader: true,
      };
    }
    case `${FETCH_PRODUCTS_LIST}_SUCCESS`: {
      return {
        ...state,
        products_list: [
          {
            _id: 45378,
            name: "AWG ALL WEATHER GEAR",
            description: `Men's Regular Fit T-Shirt (Pack of 4)`,
            discount_price: 320,
            actual_price: 400,
            image: tshirts,
            quantity: 1,
          },
          {
            _id: 35797,
            name: "Forest Club",
            description:
              "Shorts for Men | Light Weight | Casual Wear | Sports Shorts",
            discount_price: 320,
            actual_price: 700,
            image: shorts,
            quantity: 1,
          },
          {
            _id: 84679,
            name: "WORLD WEAR FOOTWEAR",
            description: `Exclusive Range of Casual Sports Running Shoes for Men`,
            discount_price: 255,
            actual_price: 998,
            image: shoes,
            quantity: 1,
          },
          {
            _id: 5789,
            name: "Neu Look",
            description:
              "Sports Leggings / Sports Fitness Yoga Track Pants for Girls & Women_GT34",
            discount_price: 449,
            actual_price: 1399,
            image: pants,
            quantity: 1,
          },
          {
            _id: 689,
            name: "Travel Backpack 50 Liters TRAVEL 500 Grey",
            description:
              "A backpack specially-designed and developed for backpackers",
            discount_price: 5299,
            actual_price: 7999,
            image: bag,
            quantity: 1,
          },
          {
            _id: 323,
            name: "CAMPING TENT 2 SECONDS EASY",
            description: `A surprise weekend? Our designers have spent time developing the 2 person tent .`,
            discount_price: 7999,
            actual_price: 9999,
            image: camp,
            quantity: 1,
          },
          {
            _id: 12323,
            name: "ADULT SNORKELING MASK EASYBREATH 500",
            description: `We designed the Easybreath 500, the second generation of our full-face mask`,
            discount_price: 1799,
            actual_price: 2499,
            image: snorkelingmask,
            quantity: 1,
          },
        ],
        loader: false,
      };
    }
    case `${FETCH_PRODUCTS_LIST}_FAILED`: {
      return {
        ...state,
        loader: false,
      };
    }

    case `${ADD_TO_CART}`: {
      console.log(payload, "............");
      return {
        ...state,
        products_in_cart: [...state.products_in_cart, { ...payload }],
      };
    }
    case `${DELETE_FROM_CART}`: {
      const deleteItem = state.products_in_cart.filter(
        (product) => product._id !== payload
      );
      return {
        ...state,
        products_in_cart: deleteItem,
      };
    }
    case `${SET_QUANTITY}`: {
      return {
        ...state,
        products_in_cart: payload,
      };
    }
    case `${EMPTY_CART}`: {
      return {
        ...state,
        products_in_cart: [],
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
