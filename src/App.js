import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {id:"1",date: new Date(2023,7,15), title: "Insurance", price: 100},
    {id:"2",date: new Date(2023,3,25), title: "Book", price: 200},
    {id:"3",date: new Date(2024,5,8), title:"Pen", price: 10},
    {id:"4",date: new Date(2025,7,9), title: "Laptop",price:78000}
  ]
  return (
    <div >
      <h1>Lets get started</h1>
      {expenses.map((expense)=>{
        return (
          <ExpenseItem
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
