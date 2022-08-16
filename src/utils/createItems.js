export function createItems(response) {
  console.log(response);
  const items = [];
  for (let i = 0; i < 10; i = i + 1) {
    const item = {
      id: response.data.results[i].id,
      title: response.data.results[i].user.first_name.charAt(0).toUpperCase() + response.data.results[i].user.first_name.slice(1),
      description: response.data.results[i].description || response.data.results[i].alt_description || response.data.results[i+1].description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      urls: [{ url: response.data.results[i].urls.small }, { url: response.data.results[i + 10].urls.small }, { url: response.data.results[i + 20].urls.small }],
      price: response.data.results[i].likes > 5 ? response.data.results[i].likes : response.data.results[i + 1].likes,
    };
    items.push(item);
  }
  return items;
}
