const apiKey = '4aa162f5448bde1772c4778bd8d966811da0124c',
  resources = 'game',
  format = 'JSON',
  url =
    'https://www.giantbomb.com/api/search/?api_key=' +
    apiKey +
    '&resources=' +
    resources +
    '&format=' +
    format +
    '&query=';

export default async function getResults(query) {
  let results = null;
  try {
    let response = await fetch(url + query);
    results = await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function _filterData(response) {
  let filteredResponse = {
    pictureUrl: response.image.icon_url,
    gameTitle: response.name,
    description: response.deck,
    platforms: response.platforms,
  };
  return filteredResponse;
}
