//definisikan tipe data
interface ParagraphProps {
   text: string;
}

export const Paragraph = ({ text }: ParagraphProps) => {
   return <p>{text}</p>;
};
