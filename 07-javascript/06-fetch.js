const url = 'https://anapioficeandfire.com/api/books/';
let authors = [];

const app = document.querySelector('#books');
app.style.paddingLeft = 0;
const loading = document.querySelector('#loading');

const addBook = (item) => {
  console.log(item);
  let element = document.createElement('div');
  let title = document.createElement('h4');
  let author = document.createElement('p');
  let published = document.createElement('p');
  let pages = document.createElement('p');

  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.alignItems = 'center';
  element.style.marginTop = '20px';

  title.textContent = item.name;
  author.textContent = `by ${item.author[0]}`;
  published.textContent = item.released.substr(0,4);
  pages.textContent = `${item.numberOfPages} pages`;

  element.append(title);
  element.append(author);
  element.append(published);
  element.append(pages);

  app.append(element);

};

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.dir(data);
      data.results.forEach((item) => {
        addBook(item);
      });
      authors = data.results;
    })
    .catch((error) => {
      console.log(error);
      let div = document.createElement('div');
      div.textContent = `an error occurred. try again`;
      app.append(div);
    })
    .finally(() => {
      app.removeChild(loading);
    });
};

fetchData(url);
