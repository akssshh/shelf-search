import "./index.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=itstartswithus&key=AIzaSyBa4rUg7SG2Qr7QY-EfptJV1w7IvcylGK4"
    );

    const books = await response.json();
    console.log(books.items[0].volumeInfo.imageLinks.thumbnail);
    setBooks(books.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="mx-auto">
      <Header />

      <main className="mt-4">
        <div className="books">
          {books.map((book) => {

            const truncateTitle = (title, maxLength) => {
              return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
            }

            // let bookImg = book.volumeInfo.imageLinks.smallThumbnail
            return (
              <>
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
                    <p>{book.volumeInfo.authors}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </section>
  );
}

export default App;
