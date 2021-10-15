const Company = ({datas, index}) => {
  const {name, count} = datas
  
  return (
    <ul key={index} className="company">
      <li className="card company__item--name">{name}</li>
      <li className="card company__item--count">{count}</li>
    </ul>
  )
}

export default Company;