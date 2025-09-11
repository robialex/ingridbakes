const ReviewsPage = () => {
    const reviews = [
      {
        name: "Maria K.",
        review: "The Basque cheesecake is out of this world! A must-try in Nicosia.",
        rating: 5,
      },
      {
        name: "Andreas P.",
        review: "Cozy atmosphere and the best coffee I've had in a long time. The pistachio cake was divine.",
        rating: 5,
      },
      {
        name: "Elena G.",
        review: "A beautiful little cafe with desserts that taste as good as they look. Highly recommend!",
        rating: 5,
      },
    ];
  
    return (
      <div className="container py-20">
        <h1 className="text-center font-serif text-4xl font-bold">Customer Reviews</h1>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.name} className="border rounded-lg p-6 text-center">
              <div className="flex justify-center">
                {Array(review.rating).fill(
                  <span className="text-yellow-500">&#9733;</span>
                )}
              </div>
              <p className="mt-4 italic">"{review.review}"</p>
              <p className="mt-4 font-bold">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ReviewsPage;
  