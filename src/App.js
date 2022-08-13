
function App() {
  return (
    <div className="wrapper clear">
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
          <img  className="cartimg" width={18} height={18} src= "images/cart.svg" alt=''/>
            <span>1025 руб.</span>
            </li>
          <li>
          <img width={18} height={18} src= "images/user.svg" alt='' />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>


        <div className="d-flex">

        <div className="card">
        <img  width={133} height={112} src="images/snikers/1.jpg" alt="111" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 990 руб.</b>
            </div>
            <button className="button">
            <img width={11} height={11} src="images/plus.svg" alt="plus" />
          </button>
          </div>
        </div>

        <div className="card">
        <img  width={133} height={112} src="images/snikers/2.jpg" alt="111" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 990 руб.</b>
            </div>
            <button className="button">
            <img width={11} height={11} src="images/plus.svg" alt="plus" />
          </button>
          </div>
        </div>

        <div className="card">
        <img  width={133} height={112} src="images/snikers/3.jpg" alt="111" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 990 руб.</b>
            </div>
            <button className="button">
            <img width={11} height={11} src="images/plus.svg" alt="plus" />
          </button>
          </div>
        </div>

        <div className="card">
        <img  width={133} height={112} src="images/snikers/4.jpg" alt="111" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 990 руб.</b>
            </div>
            <button className="button">
            <img width={11} height={11} src="images/plus.svg" alt="plus" />
          </button>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
