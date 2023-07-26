//buat definisi tipe data menggunakan interface
interface GreetingProps {
   message: string;
}

export const Greeting = ({ message }: GreetingProps) => {
   return <h1>{message}</h1>;
};
