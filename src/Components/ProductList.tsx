import { ProductItem } from "./ProductItem";

//definisikan tipe data produk
interface Product {
   name: string;
   price: number;
   description: string;
}

//definisikan tipe data props untuk komponen ProductList
interface ProductListProps {
   products: Product[]; //prop produts akan berisi array dari obje Product
}

//komponen ProductList
export const ProductList = ({ products }: ProductListProps) => {
   return (
      <div>
         <h2>Daftar Produk</h2>
         <ul>
            {products.map((product, index) => (
               //panggil komponen ProductItem dan berikan product sebagai prop
               <ProductItem key={index} product={product} />
            ))}
         </ul>
      </div>
   );
};
