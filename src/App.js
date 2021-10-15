import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import CityCard from './components/Cards/CityCard.js';

const datas = [
  { 
    id: 1,
    city: "Paris", 
    companies: [
      { name: "Ikéa", count: 100 },
      { name: "Castorama", count: 200 }
    ]
  },
  { 
    id: 2,
    city: "Londres", 
    companies: [
      { name: "Castorama", count: 250 },  
      { name: "Ikéa", count: 10 },
      { name: "Conforama", count: 300 }
    ]
  },
  { 
    id: 3,
    city: "Washington DC", 
    companies: [
      { name: "Castorama", count: 20 },  
      { name: "Ikéa", count: 20 },
      { name: "Conforama", count: 360 }
    ]
  }
]

function App() {
  
  const [isDropDisabled, setIsDropDisabled] = useState(false)
  const [cities, updateCities] = useState(datas)

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(cities);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCities(items)
    setIsDropDisabled(false)
  }

  function handleDragUpdate(result) {
    if (result.destination && (result.source.index > result.destination.index)) {
      setIsDropDisabled(true)
    }
  }

  function handleDragStart() {
    setIsDropDisabled(false)
  }

  return (
    <div className="App">
        <DragDropContext onDragStart={handleDragStart} onDragUpdate={handleDragUpdate} onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="cities" isDropDisabled={isDropDisabled}>
            {(provided) => (
              <div className="cities" {...provided.droppableProps} ref={provided.innerRef}>
                {cities.map( (city, index) => {
                    return (
                      <CityCard key={city.id} datas={city} index={index} />
                    )  
                  }                  
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
    </div>
  );
}

export default App;
