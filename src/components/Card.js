

function Card() {
    return (
        <div className="card">
        <div className="likes"><img src="/images/plusoff.svg" alt="sss" />
        </div>
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
    )
}


export default Card;