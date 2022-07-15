const BASE_URL = 'https://pixabay.com/api/';
const KEY = '21114444-0f8d4403d37e9d68ea7490c66';

function fetchImage(searchValue) {
  return fetch(
    `${BASE_URL}?q=${searchValue}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}

const api = {
  fetchImage,
};

export default api;
