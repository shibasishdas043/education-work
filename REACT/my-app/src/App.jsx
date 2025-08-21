import "./component/Item.jsx"
import './App.css'
import Item from "./component/Item.jsx"
import ItemDate from "./component/ItemDate.jsx"

function App() {
    const arr = [
        {
            itemName:"Nirma",
            itemDate:20,
            itemMonth:"June",
            itemYear:2025,
        },
        {
            itemName:"Surf",
            itemDate:22,
            itemMonth:"July",
            itemYear:2065,
        },
        {
            itemName:"Tide",
            itemDate:50,
            itemMonth:"August",
            itemYear:2023,
        },
    ];


  return (
    <>
        <Item name={arr[0].itemName}></Item>
        <ItemDate date = {arr[0].itemDate} month={arr[0].itemMonth} year={arr[0].itemYear}></ItemDate>

        <Item name={arr[1].itemName}></Item>
        <ItemDate date = {arr[2].itemDate} month={arr[1].itemMonth} year={arr[1].itemYear}></ItemDate>

      <div className="App">
            Hello World!
      </div>
    </>
  )
}

export default App
