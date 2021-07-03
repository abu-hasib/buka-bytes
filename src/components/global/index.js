import foodavi from "images/food.jpg";

const foodItems = [
  {
    id: 1,
    imgUrl: foodavi,
    item: "Amala",
    price: 50,
    city: "Lagos",
  },
  { id: 2, imgUrl: foodavi, item: "Rice", price: 70, city: "Abuja" },
  { id: 3, imgUrl: foodavi, item: "Iyan", price: 100, city: "Lagos" },
  { id: 4, imgUrl: foodavi, item: "Fufu", price: 200, city: "Kano" },
  { id: 5, imgUrl: foodavi, item: "Ogufe", price: 400, city: "Lagos" },
  { id: 6, imgUrl: foodavi, item: "Beans", price: 400, city: "Ibadan" },
];

const isSearched = (searchTerm) => (item) =>
  !searchTerm || item.city.toLowerCase().includes(searchTerm.toLowerCase());

const formatCurrency = (number) => {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return formatter.format(number);
};

export { isSearched, foodItems, formatCurrency };
