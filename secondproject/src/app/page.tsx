
import Link from "next/link";
export default function Home() {
  return (
    
    <div>
    <ul className="flex gap-4 bg-yellow-600 p-2 pl-[50]" >
      <li><Link href="/home">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact-us">Contact</Link></li>

    </ul>
    <img src="https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg" alt="sorry" />
    </div>
   
  );
}
