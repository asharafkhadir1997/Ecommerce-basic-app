import { createStore } from "redux";
const initialState = {
  count: 0,
  productId: [],
  price: 0,
  navbarname: "LOGIN",
  alreadylogin: true,
  message: "",
};
const counterReducer= (state = initialState,action)=>{
    if(action.type === "addtocart" && !state.productId.includes(action.id)){
        return({
            ...state,
            count : state.count + 1,
            productId : [...state.productId,action.id],
            price: state.price + action.price,
        });
    }
    
    if (action.type === "login" && action.firstname !== "") {
      return {
        ...state,
        count: state.count,
        productId: [...state.productId, action.id],
        price: state.price,
        navbarname:  action.firstname +" "+ action.lastname,
        alreadylogin : false,
        message : "Welcome "+ action.firstname,
      };
    }
    if (action.type === "logout") {
      return {
        ...state,
        count: 0,
        productId: [],
        price: 0,
        navbarname: "LOGIN",
        alreadylogin: true,
        message: "",
      };
    }
    if (action.type === "clearcart") {
      return {
        ...state,
        count: 0,
        productId: [],
        price: 0,

      };
    }
    return state;
}
const store = createStore(counterReducer);
export default store;