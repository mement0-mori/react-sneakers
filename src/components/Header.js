
function Header () {
    return (
        <header className="d-flex justify-between align-center p-40">
          <a href="/">
          <div className="headerLeft d-flex align-center">

          <img width={40} height={40} src= "images/logo.png" alt='' />

          <div className="headerTitle">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>

  </div>
          </a>
          

          <ul className="d-flex">
            <li className="mr-30">
            <img  className="cartimgheader" width={18} height={18} src= "images/cart.svg" alt=''/>
              <span>1025 руб.</span>
              </li>
            <li>
            <img width={18} height={18} src= "images/user.svg" alt='' />
            </li>
          </ul>
        </header>
    );
}


export default Header;