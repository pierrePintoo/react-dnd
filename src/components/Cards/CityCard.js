import '../../css/cards/card.css'
import '../../css/city/city.css'
import '../../css/company/company.css'

const CityCard = ({datas}) => {
    return (
      <div className="city">
        <h2 className="card city__title">{datas.city}</h2>
        <div className="company">
          {
            datas.companies.map( (company, index) => (
                <ul key={index} className="company__list">
                  <li className="card company__list__item--name">{company.name}</li>
                  <li className="card company__list__item--count">{company.count}</li>
                </ul>
              )
            )
          }
        </div>
      </div>
    )
}

export default CityCard;