document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let bookTitle = document.querySelector("#book-title").value;
  let availabilityDiv = document.querySelector("#availability");
  //console.log(bookTitle);
  if (bookTitle === "") {
    availabilityDiv.textContent = "Please enter a book title.";
  } else {
    const val = gettitle(bookTitle);
    val.then((data) => (availabilityDiv.textContent = data));
  }
});

var output = fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  });

async function gettitle(title) {
  var books = await output;
  // console.log(books);
  for (const book of books) {
    if (book.title.toUpperCase() === title.toUpperCase()) {
      return book.available
        ? `${book.title} is available`
        : `${book.title} is not available`;
    }
  }
  return `Book not found`;
}
