<nav className="holder navbar border fixed w-full">
  <div className="logo">
    <SiAnaconda className="text-white text-2xl" />
    <p className="logo-text">
      LaraSocial<span>x</span>
    </p>
  </div>

  <menu>
    <ul className="nav__links rou">
      {navbarLinks.map((link) => {
        const { id, label, url } = link;
        return (
          <li key={id}>
            <a href={url}>{label}</a>
          </li>
        );
      })}

      <Button
        btnLabel="Learn More"
        css="rounded-md hover:border-yellow-500 border"
      />
    </ul>
  </menu>

  <div className="menu__icons" onClick={toggleMenu}>
    {showMenu ? <IoMdCloseCircle /> : <HiMenuAlt1 />}
  </div>

  {/* <NavBarModal /> */}
</nav>;
