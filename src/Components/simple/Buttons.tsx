interface ButtonProps {
   label: string;
   Click: () => void;
}

export const Buttons = ({ label, Click }: ButtonProps) => {
   return <button onClick={Click}>{label}</button>;
};
