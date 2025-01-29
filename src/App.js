import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {id:"1",date: new Date(2023,7,15), location: "Bangalore",title: "Insurance", price: 100},
    {id:"2",date: new Date(2023,3,25), location: "Delhi",title: "Book", price: 200},
    {id:"3",date: new Date(2024,5,8), location:"Hydrabad",title:"Pen", price: 10},
    {id:"4",date: new Date(2025,7,9), location:"Mumbai",title: "Laptop",price:78000}
  ]
  return (
    <div >
      <h1>Lets get started</h1>
      {expenses.map((expense)=>{
        return (
          <ExpenseItem
          key={expense.id}
          date = {expense.date}
          location = {expense.location}
          title = {expense.title}
          price = {expense.price}
          />
        )
      })}
    </div>
  );
}

export default App;
