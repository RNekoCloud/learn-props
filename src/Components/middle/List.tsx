//definisikan property untuk list
interface ListProps {
   title: string;
   description: string;
}

interface SaveList {
   showList: ListProps;
}

export const List = ({ showList }: SaveList) => {
   return (
      <li>
         <h1>{showList.title}</h1>
         <p>{showList.description}</p>
      </li>
   );
};
