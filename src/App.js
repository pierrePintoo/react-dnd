import CityCard from './components/Cards/CityCard.js';
import { useState } from 'react';

function App() {
  const datas = [
        { 
          city: "Paris", 
          companies: [
            { name: "Ikéa", count: 100 },
            { name: "Castorama", count: 200 }
          ]
        },
        { 
          city: "Londres", 
          companies: [
            { name: "Castorama", count: 250 },  
            { name: "Ikéa", count: 10 },
            { name: "Conforama", count: 300 }
          ]
        },
        { 
          city: "Washington DC", 
          companies: [
            { name: "Castorama", count: 20 },  
            { name: "Ikéa", count: 20 },
            { name: "Conforama", count: 360 }
          ]
        }
      ]
  
  const [citys, setCities] = useState(datas)

  return (
    <div className="App">
      <main className="tree">
        { citys.map( (city, index) => (
              <CityCard key={index} datas={city} />
            )
          )
        }
      </main>
    </div>
  );
}

export default App;
