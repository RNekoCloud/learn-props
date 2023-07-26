import { Greeting } from "./Greeting";
import { Buttons } from "./Buttons";
import { Paragraph } from "./Paragraph";
import { useState } from "react";

export const UseProps = () => {
   const [word, setWord] = useState<string>("Welcome Broo");

   const ChangeWord = () => {
      setWord("Yee Kamu sudah Mengekliknya!!!");
   };

   return (
      <div>
         <Greeting message='Halo Dunia' />
         <Paragraph text={word} />
         <Buttons Click={ChangeWord} label='Click Me!' />
      </div>
   );
};
