//buat interface untuk mengatur props yang diterima
interface ItemProps {
   name: string;
   price: number;
   desc: string;
}

interface SaveToObject {
   items: ItemProps;
}

export const Item = ({ items }: SaveToObject) => {
   return (
      <div>
         <h1>{items.name}</h1>
         <p>{items.price}</p>
         <p>{items.desc}</p>
      </div>
   );
};
