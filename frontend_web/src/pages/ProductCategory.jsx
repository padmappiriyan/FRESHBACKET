import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
    const {products}=useAppContext();
    const {category} =useParams();

    const searchCategory=categories.find((item)=>(item.path.toLowerCase() ===category));
    const filteredProducts =products.filter((product)=>product.category.toLowerCase()===category);
  return (
    <div className="mt-16">
         {searchCategory && (
            <div className="flex flex-col items-end w-max">
                <p className="text-2xl font-medium">{searchCategory.text.toUpperCase()}</p>
                <div className='w-16 h-0.5 rounded-full bg-blue-600'></div>
            </div>
         )}
         {filteredProducts.length >0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 ">
                {filteredProducts.map((product,index)=>(
                       <ProductCard key={index} product={product} />
                ))}
            </div>
         ):(
            <div className=" filex items-center justify-center h-[60vh]">
                <p className="text-2xl font-medium text-blue-600">
                    No Products Found in this Category
                </p>
            </div>
         )}
    </div>
  )
}

export default ProductCategory