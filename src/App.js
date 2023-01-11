import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./redux-toolkit/catState";
import "./App.css";

function App() {
  const cats = useSelector((state) => state.cats.cats); // THE FIRST cats IS THE REDUCER'S NAME IN "redux-toolkit/store.js"
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Cats Species</h1>
      <p>Information about different species of cats.</p>
      <hr />
      <div className="Gallery">
        {cats.map((cat) => (
          <div key={cat?.id} className="row">
            <div className="column column-left"></div>
            <div className="column column-right">
              <h2>{cat?.name}</h2>
              <h5>Temperament: {cat?.temperament}</h5>
              <p>{cat?.description}</p>
              <p>
                <a
                  href={cat.cfa_url ? cat.cfa_url : (cat.vetstreet_url ? cat.vetstreet_url : cat.vcahospitals_url)}
                  rel="noreferrer"
                  target="_blank"
                >
                  Know More
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
