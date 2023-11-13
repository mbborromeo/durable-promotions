const SubNav = () => {
  return (
    <div id="subnav">
      <div className="desktop-border">
        <div className="flex-wrapper">
          <div className="flex-wrapper-left">
            <h1>Marketing</h1>
            <ul>
              <li class="on">
                <a href="#">Promotions</a>
              </li>
              <li>
                <a href="#">Brand</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
            </ul>
          </div>
          <div className="flex-wrapper-right">
            <a href="#">
              <span className="icon_announcements"></span>
            </a>
            <a href="#">
              <span className="icon_profile"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
