// import "./style.css";

const NavBar = () => {
  return (
    <nav>
      <div className="project-dropdown show-on-desktop">
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
        <li className="show-on-desktop make-last-item">Business</li>
        <li className="hide-on-desktop">More</li>
      </ul>
    </nav>
  );
};

export default NavBar;
