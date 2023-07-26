//definisikan property untuk list
interface ListProps {
   title: string;
   description: string;
}

export const List = ({ title, description }: ListProps) => {
   return (
      <li>
         <h1>{title}</h1>
         <p>{description}</p>
      </li>
   );
};
