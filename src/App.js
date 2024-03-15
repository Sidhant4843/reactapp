import './App.css';
const d =new Date();
// System
const month = d.getMonth();
const style = {
  color: '',
  fontsize: '50px'
};


if(month===7||month===10||month===11) {

  style.color = 'red'
}
function App() {
  return (
    <div className="App">
    <h1 style={style}>My name is sidhant</h1>
    <h2>{ d.getDate() + '/ ' + d.getMonth()+'/ '+d.getFullYear()} </h2>
    </div>
  );
}

export default App;
