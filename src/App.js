import './App.css';
import { Card } from './components/circlesinfocard';

function App() {
  const data = [
    {
      id: 0,
      Level: 2,
      Name: "CSE III Borrow",
      circleLimit: 23,
      duration: 10,
      CreditDetail: 10,
      noOfParticipants: 40,
      borrow: true
    },
    {
      id: 1,
      Level: 1,
      Name: "Football Team Saving",
      circleLimit: 23,
      duration: 10,
      PaidedDetail: 10,
      noOfParticipants: 40,
      savings: true

    },





  ]
  return (
    <div className="App">
      {data.map((item) => {
        console.log(item, "hii");
        return (
          <Card obj={item} />
        )

      })}
    </div>
  );
}

export default App;
