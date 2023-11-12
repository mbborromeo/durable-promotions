import Image from "next/image";
// import NavigationBar from "components/NavigationBar";

export default function Home() {
  return (
    <div className="site-container">
      <nav>
        <div className="show-on-desktop">
          <h1>Ether Photo Studio</h1>
          {/* drop down */}
        </div>

        <ul>
          <li>Home</li>
          <li>Website</li>
          <li>CRM</li>
          <li className="on">Marketing</li>
          <li className="show-on-desktop">Invoices</li>
          <li className="show-on-desktop">Money</li>
          <li className="show-on-desktop">Business</li>
          <li className="hide-on-desktop">More</li>
        </ul>
      </nav>
      <main>
        <h1>Create promotion</h1>
      </main>
    </div>
  );
}
