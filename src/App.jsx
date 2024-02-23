import "./index.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("science fiction");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=AIzaSyBa4rUg7SG2Qr7QY-EfptJV1w7IvcylGK4`
        );

        const data = await response.json();
        setBooks(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchInput]);

  const handleSearch = (inputValue) => {
    setSearchInput(inputValue);
  };

  return (
    <section className="mx-auto">
      <Header onSearch={handleSearch} />

      <main className="mt-4">
        <div className="books">
          {books.map((book) => {
            const truncateTitle = (title, maxLength) => {
              return title.length > maxLength
                ? title.slice(0, maxLength) + "..."
                : title;
            };

            // let bookImg = book.volumeInfo.imageLinks.smallThumbnail
            return (
              <div key={book.id} className="book">
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  className="rounded-md"
                  alt="book"
                  width={200}
                  height={200}
                />
                <div className="text-center">
                  <p>{truncateTitle(book.volumeInfo.title, 20)}</p>
                  <p>{truncateTitle(book.volumeInfo.authors, 1)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
}

export default App;
