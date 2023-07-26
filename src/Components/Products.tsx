import { ProductList } from "./ProductList";

export const Products = () => {
   //Data produk
   const products = [
      {
         name: "Produk 1",
         price: 10,
         description: "Ini produk bagus lohh",
      },
      {
         name: "Produk 2",
         price: 20,
         description: "ini produk mahal loh, yakin gak beli?",
      },
      {
         name: "Produk 3",
         price: 30,
         description: "jika kamu nggak beli ntar nyesel lohhh",
      },
   ];
   return (
      <div>
         {/* Panggil komponen ProductList dan berikan products sebagai prop */}
         <ProductList products={products} />
      </div>
   );
};
