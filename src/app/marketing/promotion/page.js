import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import SubNav from "@/components/SubNav/SubNav";

export default function Home() {
  return (
    <div className="site-container">
      <NavBar />

      <SubNav />

      <main>
        <h1>Create promotion</h1>
      </main>
    </div>
  );
}
