import React from 'react';
import { Card } from '../Cards/Card';
import { useState, useEffect } from 'react';

interface Tbook {
  imageUrl: string;
  title: string;
  author_name: string;
}

export default function Bestsellers() {
  const [books, setBooks] = useState<Tbook[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch(
          `https://openlibrary.org/search.json?q=machine+learning&limit=40&offset=1`
        );
        const Data = await resp.json();
        const booksWithCover = Data.docs.filter((book: any) => {
          return book.cover_edition_key && book.author_name;
        });
        const booksWithImageUrls = booksWithCover.map((book: any) => ({
          ...book,
          imageUrl: `https://covers.openlibrary.org/b/OLID/${book.cover_edition_key}-M.jpg`,
        }));
        setBooks(booksWithImageUrls);
        setIsLoading(false);
      } catch (error) {
        console.log('Error');
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <h1 className='section-title'> Books About Learning Machine</h1>
      <div className='card-body'>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className='cards'>
            {books.map((book, index) => (
              //prices gaakete
              <Card
                key={index}
                imageUrl={book.imageUrl}
                title={book.title}
                author_name={book.author_name}
              ></Card>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
