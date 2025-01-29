import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div >
      <h1>Lets get started</h1>
      <ExpenseItem
      date = {new Date(2023,7,15)}
      title = {"insurance"}
      price = "50"
      location ="Bangalore" 
      />
      <ExpenseItem
      date = {new Date(2023,3,25)}
      title = "Book"
      price = "20"
      location ="Odisha"
      />
      <ExpenseItem
      date = {new Date(2025,5,8)}
      title = "Pen"
      price = '44'
      location = "Hydrabad"/>
      
      <ExpenseItem
      date = {new Date(2024,5,9)}
      title = "laptop"
      price = "59000"
      location = "Gurgaon"/>
    </div>
  );
}

export default App;
