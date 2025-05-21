import React from 'react';
import reviews from '../assets/Ulasan.json'; // Adjust the path if necessary

const RatingStars = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      fill={index < Math.floor(rating) ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`w-5 h-5 ${index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 17.25l-6.243 3.285a1 1 0 0 1-1.493-1.032l1.27-7.056L.469 7.64a1 1 0 0 1 .553-1.707l7.084-1.028 3.169-6.416a1 1 0 0 1 1.787 0l3.169 6.416 7.084 1.028a1 1 0 0 1 .553 1.707l-4.565 4.857 1.27 7.056a1 1 0 0 1-1.493 1.032L12 17.25z"
      />
    </svg>
  ));

  return <div className="flex">{stars}</div>;
};

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
      <img
        src={review.avatar}
        alt={review.name}
        className="w-20 h-20 rounded-full object-cover mb-4 mx-auto"
      />
      <h3 className="text-xl font-semibold text-gray-800 text-center">{review.name}</h3>
      <RatingStars rating={review.rating} />
      <p className="mt-4 text-gray-600 text-center">{review.review}</p>
    </div>
  );
};

export default function ReviewsPage() {
  return (
    <div id='ulasan' className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Happy Users Say!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
