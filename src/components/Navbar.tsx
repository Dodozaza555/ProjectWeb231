export default function Navbar() {
  return (
    <nav className="navbar" aria-label="เมนูหลัก">
      <div className="navList">
        <h1 className="navTitle">Maichailaewnaj</h1>
        <div className="navActions">
          <button className="navButton navButtonSecondary" type="button">
            โพสต์ของฉัน
          </button>
          <button className="navButton navButtonPrimary" type="button">
            ลงขายสินค้า
          </button>
        </div>
      </div>
    </nav>
  );
}
