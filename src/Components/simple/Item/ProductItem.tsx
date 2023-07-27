//mendefinisikan tipe data untuk mengatur props yang akan diterima oleh komponen
interface ItemProps {
   name: string;
   price: number;
}

export const ProductItems = ({ name, price }: ItemProps) => {
   return (
      <div>
         <h3>{name}</h3>
         <p>Harga: ${price}</p>
      </div>
   );
};
