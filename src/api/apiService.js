import { mockRestaurants } from "./mockData";

export const fetchRestaurants = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: mockRestaurants }), 600);
  });
};

export const fetchRestaurantById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const r = mockRestaurants.find((x) => x.id === String(id));
      if (r) resolve({ data: r });
      else reject("Not found");
    }, 600);
  });
};
