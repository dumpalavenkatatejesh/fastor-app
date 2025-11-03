import { useEffect, useState } from "react";
import { fetchRestaurants } from "../api/apiService";
import RestaurantCard from "../components/RestaurantCard";
import Header from "../components/Header";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants().then((res) => setRestaurants(res.data));
  }, []);

  return (
    <div>
      <Header />
      <div className="p-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </div>
  );
}
