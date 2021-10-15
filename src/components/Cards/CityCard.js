import '../../css/cards/card.css';
import '../../css/city/city.css';
import '../../css/companies/company.css';

import { Draggable } from 'react-beautiful-dnd';
import Company from '../Company';

const CityCard = (props) => {
    const {datas, index} = props
    const {city, companies} = datas

    return (
      <Draggable draggableId={city} index={index}>
        {(provided) => (
          <div className="city" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <h2 className="card city__title">{city}</h2>
            <div className="city__inner">
              {
                companies.map( (company, index) => (
                    <Company index={index} datas={company} />
                  )
                )
              }
            </div>
          </div>
        )}
      </Draggable>
    )
}

export default CityCard;