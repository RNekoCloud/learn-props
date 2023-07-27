//definisikan property untuk list
interface ListProps {
   title: string;
   description: string;
}

//definisikan list sebagai objek
interface SaveList {
   showList: ListProps;
}

export const List = ({ showList }: SaveList) => {
   return (
      <li>
         {/* jadikan title menjadi Heading List */}
         <h1>{showList.title}</h1>
         {/* jadikan decription menjadi paragraph */}
         <p>{showList.description}</p>
      </li>
   );
};
