function BookCard({ title, author, rating, comment }) {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transition transform">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-1">著者：{author}</p>
      <p className="text-yellow-500 text-lg mb-2">{stars}</p>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
}

export default BookCard;
