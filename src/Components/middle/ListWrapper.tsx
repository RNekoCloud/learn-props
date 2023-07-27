import { List } from "./List";

//buat property yang sama seperti sebelumnya
interface ListProperty {
   title: string;
   description: string;
}

//jadikan sebagai
interface SaveToArr {
   toArr: ListProperty[];
}

export const ListWrapper = ({ toArr }: SaveToArr) => {
   return (
      <div>
         <h1>Daftar Saya</h1>
         <ul>
            {toArr.map((showList, index) => (
               <List key={index} showList={showList} />
            ))}
         </ul>
      </div>
   );
};
