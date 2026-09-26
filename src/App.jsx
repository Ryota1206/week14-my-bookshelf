import BookCard from "./components/BookCard";

function App() {
  const books = [
    {
      id: 1,
      title: "React入門",
      author: "POSSE",
      rating: 5,
      comment: "Reactの基礎がしっかり学べる一冊。初心者に最適。",
    },
    {
      id: 2,
      title: "JavaScript本格入門",
      author: "山田太郎",
      rating: 4,
      comment: "JSの仕組みを深く理解できる。中級者向け。",
    },
    {
      id: 3,
      title: "フロントエンド大全",
      author: "佐藤花子",
      rating: 3,
      comment: "幅広い知識を網羅しているが、やや難しい部分もある。",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
        My Bookshelf
      </header>

      <main className="max-w-3xl mx-auto p-6 grid gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            comment={book.comment}
          />
        ))}
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        © 2026 Ryota's Bookshelf
      </footer>
    </div>
  );
}

export default App;
