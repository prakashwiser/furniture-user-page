import chair1 from "../images/chair-1.jpeg";
import chair2 from "../images/chair-2.jpeg";
import chair3 from "../images/chair-3.jpeg";
import chair4 from "../images/chair-4.jpeg";
import chair5 from "../images/chair-5.jpeg";
import chair6 from "../images/chair-6.jpeg";
import chair7 from "../images/chair-7.jpeg";
import chair8 from "../images/chair-8.jpeg";
import chair9 from "../images/chair-9.jpeg";
import chair10 from "../images/chair-10.jpeg";
import chair11 from "../images/chair-11.jpeg";
import badone from "../images/bad-1.jpeg";
import badtwo from "../images/bad-2.jpeg";
import badthree from "../images/bad-3.jpeg";
import badfour from "../images/bad-4.jpeg";
import { FaShopify } from "react-icons/fa";
const objData = [
  {
    id: 4,
    img: chair1,
    name: "Natural Wood Dining Chair",
    price: "$299.99",
    Categories: "Dining Chair, Dining Room",
    tags: "clean, deco, furniture, m1, product, woocommerce",
    description:
      "Product categories and tags work in much the same way as normal categories and tags you have when writing posts in WordPress. They can be created, edited, and selected at any time.",
    icon: <FaShopify />,
    color: "brown",
    material: "Wood",
    dimensions: "20x18x35 inches",
    rating: 4.5,
    feature: "Crafted from premium natural wood for durability and style.",
    bio: "Indulge in unparalleled relaxation with our Luxe Comfort Lounge Armchair. Crafted with a meticulous blend of style, comfort, and durability, this armchair is the perfect addition to any living space, study, or reading nook. Whether you're curling up with a good book, unwinding after a long day, or entertaining guests, our armchair is designed to elevate your comfort and style.",
  },
  {
    id: 5,
    img: chair2,
    name: "Paolo Black Wood Dining Chair",
    price: "$139.99",
    Categories: "Dining Chair, Dining Room",
    tags: "black, wood, dining, modern",
    description:
      "A sleek and modern dining chair crafted from high-quality black wood, perfect for any dining room setting.",
    icon: <FaShopify />,
    color: "black",
    material: "Wood",
    dimensions: "21x19x37 inches",
    rating: 4.0,
    feature: "Sleek black finish for a sophisticated dining experience.",
    bio: "Indulge in unparalleled relaxation with our Luxe Comfort Lounge Armchair. Crafted with a meticulous blend of style, comfort, and durability, this armchair is the perfect addition to any living space, study, or reading nook. Whether you're curling up with a good book, unwinding after a long day, or entertaining guests, our armchair is designed to elevate your comfort and style.",
  },
  {
    id: 6,
    img: chair3,
    name: "Classic Leather Dining Chair",
    price: "$179.99",
    Categories: "Dining Chair, Leather, Dining Room",
    tags: "classic, leather, dining, luxurious, modern",
    description:
      "A sophisticated dining chair with a comfortable leather seat and a stylish wooden frame. Ideal for modern dining rooms.",
    icon: <FaShopify />,
    color: "brown",
    material: "Leather",
    dimensions: "22x20x38 inches",
    rating: 4.8,
    feature: "Luxurious leather seat with ergonomic design for comfort.",
    bio: "Indulge in unparalleled relaxation with our Luxe Comfort Lounge Armchair. Crafted with a meticulous blend of style, comfort, and durability, this armchair is the perfect addition to any living space, study, or reading nook. Whether you're curling up with a good book, unwinding after a long day, or entertaining guests, our armchair is designed to elevate your comfort and style.",
  },
  {
    id: 7,
    img: chair4,
    name: "Rustic Farmhouse Chair",
    price: "$149.99",
    Categories: "Dining Chair, Rustic, Farmhouse",
    tags: "rustic, farmhouse, wood, vintage",
    description:
      "A charming farmhouse-style dining chair with a distressed finish and sturdy wooden frame. A perfect addition to a cozy dining space.",
    icon: <FaShopify />,
    color: "gray",
    material: "Wood",
    dimensions: "23x21x36 inches",
    rating: 3.5,
    feature: "Distressed finish adds rustic charm to your dining room.",
    bio: "Indulge in unparalleled relaxation with our Luxe Comfort Lounge Armchair. Crafted with a meticulous blend of style, comfort, and durability, this armchair is the perfect addition to any living space, study, or reading nook. Whether you're curling up with a good book, unwinding after a long day, or entertaining guests, our armchair is designed to elevate your comfort and style.",
  },
  {
    id: 8,
    img: chair5,
    name: "Industrial Metal Chair",
    price: "$119.99",
    Categories: "Dining Chair, Industrial, Metal",
    tags: "industrial, metal, modern, urban",
    description:
      "An industrial-inspired chair with a minimalist metal design. Ideal for modern kitchens, cafes, or industrial-style interiors.",
    icon: <FaShopify />,
    color: "silver",
    material: "Metal",
    dimensions: "22x18x34 inches",
    rating: 4.2,
    feature: "Minimalist metal design for a contemporary industrial look.",
    bio: "Indulge in unparalleled relaxation with our Luxe Comfort Lounge Armchair. Crafted with a meticulous blend of style, comfort, and durability, this armchair is the perfect addition to any living space, study, or reading nook. Whether you're curling up with a good book, unwinding after a long day, or entertaining guests, our armchair is designed to elevate your comfort and style.",
  },

  {
    id: 9,
    img: chair6,
    name: "Minimalist Dining Chair",
    price: "$99.99",
    Categories: "Dining Chair, Minimalist",
    tags: "minimalist, simple, modern, sleek",
    description:
      "A clean and simple dining chair designed for modern spaces. Its minimalist design makes it a versatile piece for various interiors.",
    icon: <FaShopify />,
    color: "white",
    material: "Plastic",
    dimensions: "20x19x33 inches",
    rating: 4.7,
    feature: "Lightweight and versatile design for easy placement.",
    bio: "Indulge in unparalleled relaxation with our Luxe Comfort Lounge Armchair. Crafted with a meticulous blend of style, comfort, and durability, this armchair is the perfect addition to any living space, study, or reading nook. Whether you're curling up with a good book, unwinding after a long day, or entertaining guests, our armchair is designed to elevate your comfort and style.",
  },
  {
    id: 10,
    img: chair7,
    name: "Scandi Dining Chair",
    price: "$129.99",
    Categories: "Dining Chair, Scandinavian",
    tags: "scandi, nordic, wood, clean, stylish",
    description:
      "A Scandinavian-inspired dining chair with a sleek wooden frame and comfortable seating. Perfect for contemporary dining rooms.",
    icon: <FaShopify />,
    color: "natural",
    material: "Wood",
    dimensions: "21x18x35 inches",
    rating: 4.3,
    feature: "Scandinavian design for modern and minimalist interiors.",
    bio: "Indulge in unparalleled relaxation with our Luxe Comfort Lounge Armchair. Crafted with a meticulous blend of style, comfort, and durability, this armchair is the perfect addition to any living space, study, or reading nook. Whether you're curling up with a good book, unwinding after a long day, or entertaining guests, our armchair is designed to elevate your comfort and style.",
  },
  {
    id: 11,
    img: chair8,
    name: "Contemporary Leather Chair",
    price: "$219.99",
    Categories: "Dining Chair, Leather, Modern",
    tags: "contemporary, leather, dining, luxury",
    description:
      "A luxurious leather dining chair with a contemporary design. Ideal for modern homes looking for both comfort and style.",
    icon: <FaShopify />,
    color: "black",
    material: "Leather",
    dimensions: "24x20x38 inches",
    rating: 4.9,
    feature: "Contemporary design with premium leather upholstery.",
    bio: "Indulge in unparalleled relaxation with our Luxe Comfort Lounge Armchair. Crafted with a meticulous blend of style, comfort, and durability, this armchair is the perfect addition to any living space, study, or reading nook. Whether you're curling up with a good book, unwinding after a long day, or entertaining guests, our armchair is designed to elevate your comfort and style.",
  },
  {
    id: 12,
    img: chair9,
    name: "Comfort Plus Dining Chair",
    price: "$249.99",
    Categories: "Dining Chair, Comfort, Modern",
    tags: "comfort, plush, dining, modern",
    description:
      "A plush and comfortable dining chair designed with modern aesthetics in mind. Perfect for long dinners and gatherings.",
    icon: <FaShopify />,
    color: "beige",
    material: "Fabric",
    dimensions: "23x19x36 inches",
    rating: 4.6,
    feature: "Plush cushioning for ultimate dining comfort.",
    bio: "Indulge in unparalleled relaxation with our Luxe Comfort Lounge Armchair. Crafted with a meticulous blend of style, comfort, and durability, this armchair is the perfect addition to any living space, study, or reading nook. Whether you're curling up with a good book, unwinding after a long day, or entertaining guests, our armchair is designed to elevate your comfort and style.",
  },
  {
    id: 13,
    img: chair10,
    name: "Bold Accent Chair",
    price: "$179.99",
    Categories: "Dining Chair, Accent, Modern",
    tags: "bold, accent, unique, modern",
    description:
      "A bold accent chair designed to stand out in any room. Its sleek design and vibrant color make it a perfect statement piece.",
    icon: <FaShopify />,
    color: "red",
    material: "Velvet",
    dimensions: "22x21x34 inches",
    rating: 4.0,
    feature: "Vibrant color and bold design for a statement piece.",
    bio: "Indulge in unparalleled relaxation with our Luxe Comfort Lounge Armchair. Crafted with a meticulous blend of style, comfort, and durability, this armchair is the perfect addition to any living space, study, or reading nook. Whether you're curling up with a good book, unwinding after a long day, or entertaining guests, our armchair is designed to elevate your comfort and style.",
  },
  {
    id: 14,
    img: chair11,
    name: "Elegant Wooden Chair",
    price: "$159.99",
    Categories: "Dining Chair, Wooden, Elegant",
    tags: "elegant, wooden, dining, classic",
    description:
      "An elegant wooden dining chair with refined details, perfect for classic dining rooms or traditional spaces.",
    icon: <FaShopify />,
    color: "dark brown",
    material: "Wood",
    dimensions: "23x19x36 inches",
    rating: 4.4,
    feature: "Classic wooden frame with intricate detailing.",
    bio: "Indulge in unparalleled relaxation with our Luxe Comfort Lounge Armchair. Crafted with a meticulous blend of style, comfort, and durability, this armchair is the perfect addition to any living space, study, or reading nook. Whether you're curling up with a good book, unwinding after a long day, or entertaining guests, our armchair is designed to elevate your comfort and style.",
  },
  {
    id: 15,
    img: badone,
    name: "Rustic Lounge Sofa",
    price: "$479.99",
    Categories: "Sofa, Rustic, Wooden",
    tags: "rustic, wooden, sofa, cozy",
    description:
      "A rustic-inspired lounge sofa that blends natural wood accents with plush cushioning. Perfect for creating a warm, inviting living space.",
    icon: <FaShopify />,
    color: "natural oak",
    material: "Solid Wood and Fabric",
    dimensions: "70x35x34 inches",
    rating: 4.5,
    feature: "Natural oak base with deep, cozy seating.",
    bio: "Introduce a touch of rustic charm with the Rustic Lounge Sofa, featuring a combination of natural textures and modern comfort to enhance your living area.",
  },
  {
    id: 16,
    img: badtwo,
    name: "Elegant Upholstered Sofa",
    price: "$599.99",
    Categories: "Sofa, Upholstered, Modern",
    tags: "elegant, upholstered, sofa, luxurious",
    description:
      "An elegant upholstered sofa with sleek lines and plush cushions, ideal for creating a refined and contemporary look.",
    icon: <FaShopify />,
    color: "charcoal gray",
    material: "Fabric and Metal",
    dimensions: "78x36x34 inches",
    rating: 4.7,
    feature: "Plush upholstery with a modern design.",
    bio: "Relax in style with the Elegant Upholstered Sofa. Its superior craftsmanship and modern aesthetic provide the perfect blend of luxury and comfort for your living room.",
  },
  {
    id: 17,
    img: badthree,
    name: "Minimalist Sofa",
    price: "$449.99",
    Categories: "Sofa, Minimalist, Compact",
    tags: "minimalist, compact, sleek, sofa",
    description:
      "A minimalist sofa with clean lines and compact design, perfect for modern spaces or smaller living rooms.",
    icon: <FaShopify />,
    color: "matte black",
    material: "Metal and Fabric",
    dimensions: "65x32x30 inches",
    rating: 4.3,
    feature: "Sleek, lightweight design for modern living.",
    bio: "Enjoy the simplicity and versatility of the Minimalist Sofa. Its understated design makes it the ideal centerpiece for contemporary homes, offering both style and practicality.",
  },
  {
    id: 18,
    img: badfour,
    name: "Classic Windsor Sofa",
    price: "$529.99",
    Categories: "Sofa, Classic, Timeless",
    tags: "classic, windsor, sofa, durable",
    description:
      "A timeless Windsor-style sofa that features elegant details and plush seating for a truly comfortable experience.",
    icon: <FaShopify />,
    color: "antique white",
    material: "Wood and Fabric",
    dimensions: "72x34x32 inches",
    rating: 4.6,
    feature: "Classic Windsor-inspired design with durable craftsmanship.",
    bio: "Bring timeless elegance to your home with the Classic Windsor Sofa. Its sophisticated design and comfortable build make it a staple piece for any living space.",
  },
];

export default objData;