

function Drawer() {
    return (
        <div style={{display: 'none'}}  className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex">Корзина 
          <img className="cartBtn cu-p" src="images/exit.svg" alt="exit" />
           </h2>

          <div className="items flex">
          <div className="cartitem d-flex align-center mb-20">
            
            
            <div style={{ backgroundImage: 'url(images/snikers/1.jpg)' }} className="cartimg">

            </div>
            
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="cartBtn" src="images/exit.svg" alt="exit" />
          </div>

          <div className="cartitem d-flex align-center mb-20">
            
            
            <div style={{ backgroundImage: 'url(images/snikers/1.jpg)' }} className="cartimg">

            </div>
            
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="cartBtn" src="images/exit.svg" alt="exit" />
          </div>
          </div>
          
            <div className="cartTotalBlock">


            <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li >
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">оформить заказ <img src="images/right-arrow.svg" alt="arrow" /></button>

            </div>
        </div>
      </div>
    );
}

export default Drawer;