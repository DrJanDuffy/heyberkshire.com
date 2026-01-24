"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Las Vegas, NV",
    rating: 5,
    text: "Dr. Duffy made our home buying experience seamless. Her knowledge of the Las Vegas market is unmatched, and she guided us through every step with professionalism and care.",
    image: "/Image/person1.jpeg",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Henderson, NV",
    rating: 5,
    text: "We couldn't be happier with our new home! The entire process was smooth, and Dr. Duffy's attention to detail and negotiation skills saved us thousands. Highly recommend!",
    image: "/Image/person_2-min.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Summerlin, NV",
    rating: 5,
    text: "As first-time homebuyers, we were nervous about the process. Dr. Duffy patiently explained everything and helped us find the perfect home in our budget. Thank you!",
    image: "/Image/person_4-min.jpg",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real testimonials from satisfied clients across Las Vegas and Henderson
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  {review.image ? (
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                      <span className="text-slate-400 text-sm">{review.name[0]}</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{review.name}</h3>
                  <p className="text-sm text-slate-600">{review.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"
                    }`}
                  />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-100" />
                <p className="text-slate-700 relative z-10 pl-4">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            Read More Reviews on Google
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
