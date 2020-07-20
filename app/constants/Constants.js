const apiKey = '4aa162f5448bde1772c4778bd8d966811da0124c',
    resources = 'game',
    format = 'JSON',
    limit = '100';

export const placeholder = require('../assets/game_placeholder.png');
export const url =
    'https://www.giantbomb.com/api/search/?api_key=' +
    apiKey +
    '&resources=' +
    resources +
    '&format=' +
    format +
    '&limit=' +
    limit +
    '&query=';