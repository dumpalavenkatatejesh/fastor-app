import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurants/${restaurant.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{restaurant.name}</h3>
          <p className="text-sm text-gray-600">{restaurant.location}</p>
          <p className="mt-1 text-yellow-500">⭐ {restaurant.rating}</p>
        </div>
      </div>
    </Link>
  );
}
