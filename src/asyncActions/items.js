import { addManyItemAction } from '../store/actions';

export const fetchItems = () => {
  return async function (dispatch) {
    const response = await fetch('https://api.unsplash.com/photos/random/?count=30&client_id=owh1CmTv_87qnCkl5lWQ4MsuH6ReH-syhXzqAhqXlZU');
    const json = await response.json();
    const slicedJson = await json.slice(0, 10);
    const urls = await json.map((item) => item.urls.small);
    const ids = await slicedJson.map((item) => item.id);
    const titles = await slicedJson.map((item) => item.user.first_name);
    const description = await slicedJson.map((item) => item.user.bio);
    const prices = await slicedJson.map((item) => item.likes);
    // const tags = await [];
    const items = await [];
    for (let i = 0; i < 10; i++) {
      const item = await {
        id: ids[i],
        title: String(titles[i]),
        description: String(description[i]),
        urls: [{ url: urls[i] }, { url: urls[i + 10] }, { url: urls[i + 20] }],
        price: prices[i],
      };
      await items.push(item);
    }
    await console.log(items);
    await dispatch(addManyItemAction(items));
  };
};

export const searchUsers = () => {
  return async function (dispatch) {
    const response = await fetch(`https://api.unsplash.com/search/users?query=nas&count=30&client_id=owh1CmTv_87qnCkl5lWQ4MsuH6ReH-syhXzqAhqXlZU`);
    const json = await response.json();
    await console.log(json);
  };
};


// export const testfetchItems = () => {
//   return async function (dispatch) {
//     const response = await fetch('https://api.unsplash.com/photos/random/?count=30&client_id=owh1CmTv_87qnCkl5lWQ4MsuH6ReH-syhXzqAhqXlZU');
//     const json = await response.json();  
//     const  urls = await   json.map(el=>el.urls.small)
//     await console.log(urls);
//   };
// };
