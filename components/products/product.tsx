
import React from 'react';
import { FaFire } from 'react-icons/fa';

import CardLoading from '../common/Loading';
import NodataFound from '@/app/NoDataFound';
import Link from 'next/link';

type Product = {
  _id: string;
  productName: string;
  price: number;
  oldprice?: number;
  featured: boolean;
  image: string[];
  rating: number;
  createdAt: string;
  brand: string;
  category: string;
  description: string;
  color: string;
  discount?: string;
};

type PopularProductProps = {
  products: Product[];
};





const PopularProduct = ({ products }: PopularProductProps) => {
  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = false;
 

 
  return (
    <div className='shadow-lg bg-primary rounded-md w-full h-auto border border-slate-100 mt-8 px-4'>
      <div className='flex justify-start gap-2 pt-4 px-2'>
        <FaFire className='text-white font-semibold h-[25px] w-[25px] bg-secondary rounded-full p-1' />
        <p className='text-xl text-black font-semibold '>Popular Products</p>
      </div>
      {isLoading ? (
        <CardLoading />
      ) : (
        <div className="py-4 px-3">
          {
            products.length > 0 ? 
            <>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

            {
              products?.map((item, i) => (
                <React.Fragment key={i}>
                  {/* <Link href={`/products/${item?._id}`}> */}
                  <div  className=" mr-3 mb-3" >

                    <div key={i} className="w-full cursor-pointer  overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                      <div className="relative overflow-hidden pt-8 pb-3 px-2 rounded-md">
                        <img
                          src={item.image[0]}
                          style={{ width: '100%', height: '200px', objectFit: 'contain' }}
                          className="rounded-lg"
                          alt={item.productName}
                        />
                        <div className="absolute bg-secondary text-white rounded-xl p-[2px] top-[3%] left-[5%] px-4">
                          <p className="font-normal text-[12px]">{item.discount ?? '0%'} OFF</p>
                        </div>
                      </div>
                      <div className="px-3 pb-5">
                        <h5 className="text-md tracking-tight text-slate-900">{item?.productName?.substring(0, 20)}{item?.productName?.length > 20 ? '...' : ''}</h5>
                        <div className="mt-1 mb-5 flex items-center justify-between">
                          <p>
                            <span className="text-lg font-bold text-slate-900">${item?.price}</span>
                            <span className="text-sm text-slate-900 line-through">
                              ${item?.oldprice ?? 699}
                            </span>
                          </p>
                          <div className="flex items-center">

                            <svg
                              aria-hidden="true"
                              className="h-4 w-4 text-yellow-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              aria-hidden="true"
                              className="h-4 w-4 text-yellow-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              aria-hidden="true"
                              className="h-4 w-4 text-yellow-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <span className="mr-2 ml-1 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                              {item?.rating ?? 5.0}
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* </Link> */}

                  </React.Fragment>
              )) }
            </div>

            </> 
            :
            <div className='flex justify-center items-center'>
            <NodataFound />
          </div>
          }

        </div>


      )}
    </div>
  );
};

export default PopularProduct;
