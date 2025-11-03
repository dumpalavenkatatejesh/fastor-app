import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRestaurantById } from "../api/apiService";
import Header from "../components/Header";

export default function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurantById(id).then((res) => setRestaurant(res.data));
  }, [id]);

  if (!restaurant) return <p className="text-center mt-20">Loading...</p>;

  const handleShare = () => {
    navigator.share
      ? navigator.share({
          title: restaurant.name,
          text: "Check out this restaurant!",
          url: window.location.href,
        })
      : alert("Sharing not supported");
  };

  return (
    <div>
      <Header />
      <div className="p-6">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-60 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{restaurant.name}</h2>
        <p className="text-gray-600 mt-2">{restaurant.description}</p>
        <p className="text-yellow-500 mt-1">⭐ {restaurant.rating}</p>
        <button
          onClick={handleShare}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Share Restaurant
        </button>
      </div>
    </div>
  );
}
