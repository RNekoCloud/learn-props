import { Item } from "./Item";

export const UseItem = () => {
   const products = [
      {
         name: "Tempe",
         price: 2000,
         desc: "Tempe itu sehat loh",
      },
      {
         name: "Iphone",
         price: 30000,
         desc: "Pakailah Iphone untuk handphonemu",
      },
   ];

   return (
      <div>
         <h1>Daftar Product</h1>
         {products.map((product, index) => (
            <Item key={index} items={product} />
         ))}
      </div>
   );
};
