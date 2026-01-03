import React from 'react';
// import { GetSearchProduct } from "@/store/Action/Action";
import PopularProduct from '@/components/products/product';

export async function generateMetadata() {
  return {
    title: "Motion Web | " +  "Product Page",
    description: "Read more about this topic.",
    alternates: {
      canonical: `https://airbnb-forntend-ugiy.vercel.app/`,
    
    },
    openGraph: {
      title:"Motion Web |  " +  "Product Page",
      description:"Read more about this topic.",
     
      url: `https://airbnb-forntend-ugiy.vercel.app/`,
    },
    images: [
      {
        url: "https://framer-motion-demo-ten.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Motion Web",
      },
    ],
  };
}
const Product = async() => {
  
// const response = await GetSearchProduct(1, 15, {});
const products = [
  {
    _id: "66f7b39b561448bf7aa20159",
    productName: "Titan-TT5",
    price: 6000,
    oldprice: 8000,
    featured: true,
    image: [
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727509402/lbdi1t6pehcd464ejgu0.jpg",
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727509402/utcw9hxiqaviw8vvrsml.jpg"
    ],
    rating: 5.9,
    createdAt: "2024-09-28T07:41:32.820Z",
    brand: "Titan",
    category: "Watch For Men",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used",
    color: "red",
    discount: "20%"
  },
  {
    _id: "66fe6491ff22d9843a6449d6",
    productName: "Titan-TR5",
    price: 5000,
    oldprice: 6000,
    featured: true,
    image: [
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727947921/iwonirwfryyvw7zygvf2.jpg",
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727947921/b0qijimjsj6hiyjjz87l.jpg"
    ],
    rating: 5.9,
    createdAt: "2024-10-03T09:29:25.008Z",
    brand: "Titan",
    category: "Watch For Men",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used",
    color: "black",
    discount: "15%"
  },
  {
    _id: "66fe67a9ff22d9843a6449d9",
    productName: "Titan-T98",
    price: 4500,
    oldprice: 5500,
    featured: true,
    image: [
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727948712/o72shhhgiebkiiodtyro.jpg",
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727948712/gtarnyxttcvqrnhcv4ml.jpg"
    ],
    rating: 5.9,
    createdAt: "2024-10-03T09:29:25.008Z",
    brand: "Titan",
    category: "Watch For Men",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used",
    color: "black",
    discount: "25%"
  },
  {
    _id: "66fe6e2cff22d9843a644a2d",
    productName: "Samsung-A05",
    price: 56000,
    oldprice: 58000,
    featured: true,
    image: [
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727950379/pocqdtxnidrqsxsxluv6.jpg",
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727950379/b53pogaptpoczb7dslpt.jpg"
    ],
    rating: 5.9,
    createdAt: "2024-10-03T09:29:25.008Z",
    brand: "sumsung",
    category: "Feature Phone",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used",
    color: "black"
  },
  {
    _id: "66fe6ec3ff22d9843a644a34",
    productName: "Samsung-S24",
    price: 70000,
    oldprice: 78000,
    featured: true,
    image: [
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727950531/mvnxr42c1mqgiludz3qn.jpg",
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727950530/xd4voqiyovoktchwj0ka.jpg"
    ],
    rating: 5.9,
    createdAt: "2024-10-03T09:29:25.008Z",
    brand: "sumsung",
    category: "Feature Phone",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used",
    color: "slate"
  },
  {
    _id: "66fe6f38ff22d9843a644a37",
    productName: "Samsung-S21",
    price: 65000,
    oldprice: 68000,
    featured: true,
    image: [
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727950647/wbofboaiaxwa32znrzdn.jpg",
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727950648/x1daxh2xn7pqtzjabdt8.jpg"
    ],
    rating: 5.9,
    createdAt: "2024-10-03T09:29:25.008Z",
    brand: "sumsung",
    category: "Feature Phone",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used",
    color: "slate",
    discount: "5%"
  },
  {
    _id: "66fe6f73ff22d9843a644a3a",
    productName: "Samsung-A53",
    price: 69000,
    oldprice: 70000,
    featured: true,
    image: [
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727950705/rjxpzyud1gt91v4hvcui.jpg",
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727950706/oomus7rtuzni0rmephfl.jpg"
    ],
    rating: 5.9,
    createdAt: "2024-10-03T09:29:25.008Z",
    brand: "sumsung",
    category: "Smart Phone",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used",
    color: "black",
    discount: "7%"
  },
  {
    _id: "66fe6f98ff22d9843a644a3d",
    productName: "Samsung-A34",
    price: 69000,
    oldprice: 70000,
    featured: true,
    image: [
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727950743/zu8pu9t6cdtcdanpwcwd.jpg",
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727950743/lshi7jaafofeykui7cbt.jpg"
    ],
    rating: 5.9,
    createdAt: "2024-10-03T09:29:25.008Z",
    brand: "sumsung",
    category: "Smart Phone",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used",
    color: "black",
    discount: "11%"
  },
  {
    _id: "66fe7138ff22d9843a644a40",
    productName: "Samsung-S34",
    price: 90000,
    oldprice: 91000,
    featured: true,
    image: [
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727951159/kllryqhqwjblzvkqhftg.jpg",
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727951159/lahdck7a4x2vhocf75bv.jpg"
    ],
    rating: 5.9,
    createdAt: "2024-10-03T09:29:25.008Z",
    brand: "sumsung",
    category: "Smart Phone",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used",
    color: "slate"
  },
  {
    _id: "66fe82edff22d9843a644a9a",
    productName: "Apple PH-10",
    price: 90000,
    oldprice: 91000,
    featured: true,
    image: [
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727955692/qmnqje0xd92cjvgsjht8.jpg",
      "http://res.cloudinary.com/dg8qdhrgh/image/upload/v1727955692/gpnmqiakgalcemnai5lq.jpg"
    ],
    rating: 5.9,
    createdAt: "2024-10-03T09:29:25.008Z",
    brand: "apple",
    category: "Watch For women",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used",
    color: "purple",
    discount: "15%"
  }
];

 
  return (
    <div className=''>
      <PopularProduct products={products}/>
    </div>
  );
}; 

export default Product;
