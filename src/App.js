import {useState, useMemo} from "react";
import Navigation from "router/Navigation";
import ListContext from "context/ListContext";
import './App.css';

function App() {
  const [list, setList] = useState([]);

  const update = (data) => {
    setList(data);
  }

  const listContextValue = useMemo(
    () => ({
      list,
      update
  
    }),
    [list]);

  return (
    
      <div className="App">
          <div>
          <ListContext.Provider value={listContextValue}>
            <Navigation />  
          </ListContext.Provider>
          </div>      
      </div>
  
  );
}

export default App;
