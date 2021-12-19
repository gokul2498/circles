import './App.css';
import { ActiveFeed } from './components/activefeed';

function App() {
  const data = [
    {
      id: 0,
      Name: "CSE III Borrow",
      EMI: 40,
      Level: 2,
      CreditDetail: '10 %',
      Duration: 10,
      borrow: true
    },
    {
      id: 1,
      Name: "CSE III Borrow",
      EMI: 40,
      Level: 2,
      Duration: 10,
      savings: true

    },





  ]
  return (
    <div className="App">
      {data.map((item) => {
        console.log(item, "hii");
        return (
          <ActiveFeed obj={item} />
        )

      })}
    </div>
  );
}

export default App;
