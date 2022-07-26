// import axios from 'axios';
import { addManyItemAction } from '../store/actions';
// import { createItems } from '../utils/createItems';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

// const queryDefault = 'house';

export const fetchItems = () => {
  return async function (dispatch) {
    const housesCollectionRef = collection(db, 'houses');
    const data = await getDocs(housesCollectionRef);
    const items = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    dispatch(addManyItemAction(items));
  };
};

// ======= unsplash ======
// export const fetchItems = (query = queryDefault) => {
//   return async function (dispatch) {
//     const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=30&client_id=owh1CmTv_87qnCkl5lWQ4MsuH6ReH-syhXzqAhqXlZU`);
//     const items = createItems(response);
//     dispatch(addManyItemAction(items));
//   };
// };

// export const searchUsers = () => {
//   return async function (dispatch) {
//     const response = await fetch(`https://api.unsplash.com/search/users?query=nas&count=30&client_id=owh1CmTv_87qnCkl5lWQ4MsuH6ReH-syhXzqAhqXlZU`);
//     const json = await response.json();
//     await console.log(json);
//   };
// };

// export const testfetchItems = () => {
//   return async function (dispatch) {
//     const response = await fetch('https://api.unsplash.com/photos/random/?count=30&client_id=owh1CmTv_87qnCkl5lWQ4MsuH6ReH-syhXzqAhqXlZU');
//     const json = await response.json();
//     const  urls = await   json.map(el=>el.urls.small)
//     await console.log(urls);
//   };
// };
