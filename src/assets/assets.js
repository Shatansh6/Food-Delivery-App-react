// ✅ Import all images
import add_icon from './add_icon.png';
import add_icon_green from './add_icon_green.png';
import add_icon_white from './add_icon_white.png';
import app_store from './app_store.png';
import bag_icon from './bag_icon.png';
import basket_icon from './basket_icon.png';
import cross_icon from './cross_icon.png';
import facebook_icon from './facebook_icon.png';
import linkedin_icon from './linkedin_icon.png';
import twitter_icon from './twitter_icon.png';
import play_store from './play_store.png';
import rating_starts from './rating_starts.png';
import remove_icon_red from './remove_icon_red.png';
import search_icon from './search_icon.png';
import selector_icon from './selector_icon.png';
import logout_icon from './logout_icon.png';
import profile_icon from './profile_icon.png';
import parcel_icon from './parcel_icon.png';
import upload_area from './upload_area.png';
import order_icon from './order_icon.png';
import logo from './logo.png';
import profile_image from './profile_image.png';

// ✅ Import header and menu images
import header_img from './header_img.png';
import menu_1 from './menu_1.png';
import menu_2 from './menu_2.png';
import menu_3 from './menu_3.png';
import menu_4 from './menu_4.png';
import menu_5 from './menu_5.png';
import menu_6 from './menu_6.png';
import menu_7 from './menu_7.png';
import menu_8 from './menu_8.png';

// ✅ Import all food images
import food_1 from './food_1.png';
import food_2 from './food_2.png';
import food_3 from './food_3.png';
import food_4 from './food_4.png';
import food_5 from './food_5.png';
import food_6 from './food_6.png';
import food_7 from './food_7.png';
import food_8 from './food_8.png';
import food_9 from './food_9.png';
import food_10 from './food_10.png';
import food_11 from './food_11.png';
import food_12 from './food_12.png';
import food_13 from './food_13.png';
import food_14 from './food_14.png';
import food_15 from './food_15.png';
import food_16 from './food_16.png';
import food_17 from './food_17.png';
import food_18 from './food_18.png';
import food_19 from './food_19.png';
import food_20 from './food_20.png';
import food_21 from './food_21.png';
import food_22 from './food_22.png';
import food_23 from './food_23.png';
import food_24 from './food_24.png';
import food_25 from './food_25.png';
import food_26 from './food_26.png';
import food_27 from './food_27.png';
import food_28 from './food_28.png';
import food_29 from './food_29.png';
import food_30 from './food_30.png';
import food_31 from './food_31.png';
import food_32 from './food_32.png';

// ✅ Group all assets in a single object
export const assets = {
  add_icon,
  add_icon_green,
  add_icon_white,
  app_store,
  bag_icon,
  basket_icon,
  cross_icon,
  facebook_icon,
  linkedin_icon,
  twitter_icon,
  play_store,
  rating_starts,
  remove_icon_red,
  search_icon,
  selector_icon,
  logout_icon,
  profile_icon,
  parcel_icon,
  upload_area,
  order_icon,
  logo,
  profile_image,
  header_img,
};

export const menu_list = [
  { name: "Pizza", image: menu_1 },
  { name: "Burgers", image: menu_2 },
  { name: "Snacks", image: menu_3 },
  { name: "Pasta", image: menu_4 },
  { name: "Salads", image: menu_5 },
  { name: "Desserts", image: menu_6 },
  { name: "Indian", image: menu_7 },
  { name: "Asian", image: menu_8 },
  // Optional extra:
  // { name: "Mexican", image: menu_9 },
];

export const food_list = [
  {
    id: 1,
    name: 'Margherita Pizza',
    image: food_1,
    price: 299,
    description: 'Classic cheese pizza topped with mozzarella and tomato sauce.',
    category: 'Pizza',
  },
  {
    id: 2,
    name: 'Veggie Supreme Pizza',
    image: food_2,
    price: 349,
    description: 'Loaded with capsicum, olives, onions, and golden corn.',
    category: 'Pizza',
  },
  {
    id: 3,
    name: 'Chicken BBQ Pizza',
    image: food_3,
    price: 399,
    description: 'Tender BBQ chicken with cheese and smoky sauce.',
    category: 'Pizza',
  },
  {
    id: 4,
    name: 'Cheese Burger',
    image: food_4,
    price: 199,
    description: 'Juicy burger with cheddar cheese and lettuce.',
    category: 'Burgers',
  },
  {
    id: 5,
    name: 'Double Patty Burger',
    image: food_5,
    price: 249,
    description: 'Two beef patties with melted cheese and spicy mayo.',
    category: 'Burgers',
  },
  {
    id: 6,
    name: 'Grilled Sandwich',
    image: food_6,
    price: 149,
    description: 'Crispy sandwich filled with cheese and veggies.',
    category: 'Snacks',
  },
  {
    id: 7,
    name: 'Pasta Alfredo',
    image: food_7,
    price: 279,
    description: 'Creamy Alfredo sauce with garlic and herbs.',
    category: 'Pasta',
  },
  {
    id: 8,
    name: 'Pasta Arrabbiata',
    image: food_8,
    price: 259,
    description: 'Spicy tomato-based pasta with Italian seasoning.',
    category: 'Pasta',
  },
  {
    id: 9,
    name: 'French Fries',
    image: food_9,
    price: 99,
    description: 'Crispy golden fries with a sprinkle of salt.',
    category: 'Snacks',
  },
  {
    id: 10,
    name: 'Chicken Nuggets',
    image: food_10,
    price: 159,
    description: 'Tender crispy chicken nuggets with dip.',
    category: 'Snacks',
  },
  {
    id: 11,
    name: 'Caesar Salad',
    image: food_11,
    price: 179,
    description: 'Fresh lettuce, croutons, and Caesar dressing.',
    category: 'Salads',
  },
  {
    id: 12,
    name: 'Greek Salad',
    image: food_12,
    price: 189,
    description: 'Tomatoes, cucumber, feta, and olives with olive oil dressing.',
    category: 'Salads',
  },
  {
    id: 13,
    name: 'Chocolate Shake',
    image: food_13,
    price: 129,
    description: 'Thick chocolate shake topped with cream.',
    category: 'Drinks',
  },
  {
    id: 14,
    name: 'Cold Coffee',
    image: food_14,
    price: 119,
    description: 'Refreshing cold coffee with ice cream.',
    category: 'Drinks',
  },
  {
    id: 15,
    name: 'Strawberry Smoothie',
    image: food_15,
    price: 139,
    description: 'Smooth and creamy strawberry delight.',
    category: 'Drinks',
  },
  {
    id: 16,
    name: 'Chicken Biryani',
    image: food_16,
    price: 299,
    description: 'Fragrant rice cooked with chicken and aromatic spices.',
    category: 'Indian',
  },
  {
    id: 17,
    name: 'Paneer Butter Masala',
    image: food_17,
    price: 249,
    description: 'Rich tomato gravy with soft paneer cubes.',
    category: 'Indian',
  },
  {
    id: 18,
    name: 'Masala Dosa',
    image: food_18,
    price: 159,
    description: 'Crispy dosa stuffed with spiced potatoes.',
    category: 'Indian',
  },
  {
    id: 19,
    name: 'Chicken Curry',
    image: food_19,
    price: 279,
    description: 'Spicy Indian chicken curry with gravy.',
    category: 'Indian',
  },
  {
    id: 20,
    name: 'Veg Thali',
    image: food_20,
    price: 229,
    description: 'Traditional Indian thali with roti, sabji, dal, and rice.',
    category: 'Indian',
  },
  {
    id: 21,
    name: 'Sushi Roll',
    image: food_21,
    price: 399,
    description: 'Japanese sushi roll with salmon and rice.',
    category: 'Asian',
  },
  {
    id: 22,
    name: 'Ramen Noodles',
    image: food_22,
    price: 349,
    description: 'Hot ramen with veggies and miso broth.',
    category: 'Asian',
  },
  {
    id: 23,
    name: 'Fried Rice',
    image: food_23,
    price: 229,
    description: 'Chinese-style fried rice with soy sauce and vegetables.',
    category: 'Asian',
  },
  {
    id: 24,
    name: 'Spring Rolls',
    image: food_24,
    price: 179,
    description: 'Crispy spring rolls filled with veggies.',
    category: 'Asian',
  },
  {
    id: 25,
    name: 'Ice Cream Sundae',
    image: food_25,
    price: 149,
    description: 'Vanilla ice cream with nuts and chocolate syrup.',
    category: 'Desserts',
  },
  {
    id: 26,
    name: 'Brownie with Ice Cream',
    image: food_26,
    price: 169,
    description: 'Hot chocolate brownie topped with vanilla ice cream.',
    category: 'Desserts',
  },
  {
    id: 27,
    name: 'Pancakes',
    image: food_27,
    price: 139,
    description: 'Fluffy pancakes served with maple syrup.',
    category: 'Desserts',
  },
  {
    id: 28,
    name: 'Waffles',
    image: food_28,
    price: 149,
    description: 'Crispy waffles with chocolate topping.',
    category: 'Desserts',
  },
  {
    id: 29,
    name: 'Garlic Bread',
    image: food_29,
    price: 119,
    description: 'Toasted bread with butter and garlic seasoning.',
    category: 'Snacks',
  },
  {
    id: 30,
    name: 'Tacos',
    image: food_30,
    price: 189,
    description: 'Mexican tacos filled with beans and veggies.',
    category: 'Mexican',
  },
  {
    id: 31,
    name: 'Burrito',
    image: food_31,
    price: 199,
    description: 'Soft tortilla wrap with rice, beans, and salsa.',
    category: 'Mexican',
  },
  {
    id: 32,
    name: 'Nachos with Cheese',
    image: food_32,
    price: 179,
    description: 'Crispy nachos topped with melted cheese and salsa.',
    category: 'Mexican',
  },
];

// ✅ Backend URL (if needed)
export const url = 'http://localhost:4000';

// ✅ Default export for cleaner imports
export default assets;
