//definisikan tipe data produk
interface Product {
   name: string;
   price: number;
   description: string;
}

//definisikan tipe data props untuk komponen ProductItem
interface ProductItemProps {
   product: Product; //prop product akan berisi objek Product
}

export const ProductItem = ({ product }: ProductItemProps) => {
   return (
      <li>
         <h3>{product.name}</h3>
         <p>Harga: ${product.price}</p>
         <p>{product.description}</p>
      </li>
   );
};
