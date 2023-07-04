

export const ItemListContainer = ({greeting, color}) => {
const miEstilo={
  color:color,
  textShadow: "1px 1px 2px yellow" 
}
  return (
    <main className="main"> 
      <h1 style={miEstilo}>{greeting}</h1>
      <hr />
      <h2>Aqui estaran los productos de mi bodeguita</h2>
    </main>
  )
}
