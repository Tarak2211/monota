export const products = [
  { id: 1,  name: "Heavy Duty Impact Wrench",               category: "Tool & Equipments",  subcategory: "Impact Wrenches",    price: 60.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=80", rating: 4, reviews: 12, badge: null },
  { id: 2,  name: "All Season Performance Tire",            category: "Wheels & Tires",     subcategory: "Tires",              price: 132.00, oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", rating: 5, reviews: 34, badge: null },
  { id: 3,  name: "Synthetic Engine Oil 5W-30",             category: "Oil Fluids",         subcategory: "Engine Oil",         price: 75.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&q=80", rating: 4, reviews: 8,  badge: null },
  { id: 4,  name: "Professional Tool Box Set",              category: "Tool & Equipments",  subcategory: "Tool Boxes",         price: 76.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&q=80", rating: 5, reviews: 22, badge: null },
  { id: 5,  name: "LED Headlight Kit H7",                   category: "Lighting",           subcategory: "Headlights",         price: 80.00,  oldPrice: 90.00, discount: 11,   image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&q=80", rating: 4, reviews: 17, badge: "-11%" },
  { id: 6,  name: "Brake Pads Set - Front Axle",            category: "Replacement Parts",  subcategory: "Brake Parts",        price: 85.00,  oldPrice: 98.00, discount: 13,   image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80", rating: 4, reviews: 29, badge: "-13%" },
  { id: 7,  name: "Bluetooth Car Receiver",                 category: "Smart Devices",      subcategory: "Bluetooth Devices",  price: 40.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80", rating: 3, reviews: 15, badge: null },
  { id: 8,  name: "Wheel Rim 17-inch Alloy",                category: "Wheels & Tires",     subcategory: "Wheels",             price: 75.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=400&q=80", rating: 5, reviews: 41, badge: null },
  { id: 9,  name: "USB Dash Camera 4K",                     category: "Smart Devices",      subcategory: "Dash Cam",           price: 95.00,  oldPrice: 120.00,discount: 21,   image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&q=80", rating: 5, reviews: 56, badge: "NEW" },
  { id: 10, name: "Shock Absorber Rear Kit",                category: "Replacement Parts",  subcategory: "Shock & Suspension", price: 110.00, oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80", rating: 4, reviews: 19, badge: null },
  { id: 11, name: "Air Compressor 50L",                     category: "Tool & Equipments",  subcategory: "Compressors",        price: 185.00, oldPrice: 210.00,discount: 12,   image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80", rating: 4, reviews: 11, badge: "-12%" },
  { id: 12, name: "Interior LED Strip Lights",              category: "Lighting",           subcategory: "Interior Light",     price: 28.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", rating: 3, reviews: 7,  badge: "HOT" },
  { id: 13, name: "LED Tail Light Assembly",                category: "Lighting",           subcategory: "Tail Lights",        price: 65.00,  oldPrice: 80.00, discount: 19,   image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&q=80", rating: 4, reviews: 23, badge: "-19%" },
  { id: 14, name: "Fog Light Kit - Universal",              category: "Lighting",           subcategory: "Fog Lights",         price: 45.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80", rating: 4, reviews: 18, badge: null },
  { id: 15, name: "Tire Chain Set - Snow",                  category: "Wheels & Tires",     subcategory: "Tire Chains",        price: 55.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80", rating: 4, reviews: 9,  badge: null },
  { id: 16, name: "Wheel Accessory Lock Set",               category: "Wheels & Tires",     subcategory: "Wheel Accessories",  price: 32.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=400&q=80", rating: 3, reviews: 6,  badge: null },
  { id: 17, name: "Brake Fluid DOT 4",                      category: "Oil Fluids",         subcategory: "Brake Fluid",        price: 18.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&q=80", rating: 4, reviews: 14, badge: null },
  { id: 18, name: "Engine Coolant 5L",                      category: "Oil Fluids",         subcategory: "Coolant",            price: 22.00,  oldPrice: 28.00, discount: 21,   image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&q=80", rating: 4, reviews: 11, badge: "-21%" },
  { id: 19, name: "Smartwatch Car Tracker",                 category: "Smart Devices",      subcategory: "Smartwatch",         price: 120.00, oldPrice: 150.00,discount: 20,   image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80", rating: 5, reviews: 33, badge: "NEW" },
  { id: 20, name: "Car USB Connect Hub",                    category: "Smart Devices",      subcategory: "USB Connect",        price: 35.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80", rating: 3, reviews: 10, badge: null },
  { id: 21, name: "Exhaust Muffler Universal",              category: "Replacement Parts",  subcategory: "Exhaust",            price: 95.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80", rating: 4, reviews: 8,  badge: null },
  { id: 22, name: "Car Floor Mat Set PVC",                  category: "Accessories",        subcategory: "Floor Mats",         price: 38.00,  oldPrice: 50.00, discount: 24,   image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80", rating: 4, reviews: 27, badge: "-24%" },
  { id: 23, name: "Premium Seat Cover Set",                 category: "Accessories",        subcategory: "Seat Covers",        price: 65.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80", rating: 4, reviews: 19, badge: null },
  { id: 24, name: "Car Care Polish Kit",                    category: "Accessories",        subcategory: "Car Care",           price: 42.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80", rating: 5, reviews: 31, badge: "HOT" },
  { id: 25, name: "Hand Tool Set 108pc",                    category: "Tool & Equipments",  subcategory: "Hand Tools",         price: 145.00, oldPrice: 180.00,discount: 19,   image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&q=80", rating: 5, reviews: 44, badge: "-19%" },
  { id: 26, name: "Transmission Fluid ATF",                 category: "Oil Fluids",         subcategory: "Transmission Fluid", price: 30.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&q=80", rating: 4, reviews: 7,  badge: null },
  { id: 27, name: "Electrical Wiring Kit",                  category: "Replacement Parts",  subcategory: "Electrical",         price: 55.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80", rating: 3, reviews: 12, badge: null },
  { id: 28, name: "Car Organizer Boot Bag",                 category: "Accessories",        subcategory: "Organizers",         price: 28.00,  oldPrice: null,  discount: null, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80", rating: 4, reviews: 15, badge: null },
];

export const categories = [
  {
    name: "Wheels & Tires",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
    subcategories: ["Tires", "Tire Chains", "Tire Accessories", "Wheels", "Wheel Accessories"],
  },
  {
    name: "Smart Devices",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&q=80",
    subcategories: ["Bluetooth Devices", "USB Connect", "Dash Cam", "Screen TV", "Smartwatch"],
  },
  {
    name: "Oil Fluids",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=300&q=80",
    subcategories: ["Engine Oil", "Brake Fluid", "Coolant", "Transmission Fluid", "Lubricants"],
  },
  {
    name: "Lighting",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=300&q=80",
    subcategories: ["Headlights", "Tail Lights", "Interior Light", "Fog Lights", "LED Strips"],
  },
  {
    name: "Replacement Parts",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&q=80",
    subcategories: ["Brake Parts", "Shock & Suspension", "Electrical", "Exhaust", "Filters"],
  },
  {
    name: "Tool & Equipments",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=300&q=80",
    subcategories: ["Tool Boxes", "Tool Sets", "Impact Wrenches", "Compressors", "Hand Tools"],
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&q=80",
    subcategories: ["Floor Mats", "Seat Covers", "Car Care", "Organizers"],
  },
];

export const blogPosts = [
  { id: 1, title: "Top 5 Tips for Maintaining Your Car This Winter", date: "June 18th, 2022", author: "John Smith", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80", excerpt: "Winter can be harsh on your vehicle. Here are five essential tips to keep your car running smoothly during cold months." },
  { id: 2, title: "How to Choose the Right Tires for Your Vehicle", date: "June 18th, 2022", author: "Mike Johnson", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", excerpt: "Selecting the correct tires is one of the most important decisions for your vehicle's performance and safety." },
  { id: 3, title: "LED vs Halogen Headlights: Which Is Better?", date: "June 18th, 2022", author: "Sarah Davis", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&q=80", excerpt: "We compare LED and halogen headlights across brightness, energy usage, lifespan, and cost to help you decide." },
];

export const dealOfTheDay = products[5];
