import { ListWrapper } from "./ListWrapper";

export const UseList = () => {
   const myList = [
      {
         title: "Belajar",
         description: "Saya belajar TS",
      },
      {
         title: "Aku makan",
         description: "Ayo makan bareng",
      },
      {
         title: "Belajar JS",
         description: "Saya senang dengan Javascript",
      },
   ];

   return (
      <div>
         <ListWrapper toArr={myList} />
      </div>
   );
};
