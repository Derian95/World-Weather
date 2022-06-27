import { useState, useEffect } from "react";
import { getWeatherCity } from "./api/Weather";
import "./App.css";
import Tilt from "react-parallax-tilt";
import Card from "./components/card/Card";
import Logo from "./components/logo/Logo";
import ImgLogo from "./assets/Logo.png";
import Error from "./components/error/Error";
import IconInitial from "./components/initialIcon/IconInitial";
function App() {
  const [data, setData] = useState([]);

  const [nameCity, setNameCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [init, setInit] = useState(true);

  const dataCity = async (city) => {
    const response = await getWeatherCity(city);
    if (response === 404) {
      setMessage("The place was not found");
      setLoading(false);
      setError(true);
    } else if (response === 400) {
      setMessage("I do not enter the name of any place");
      setLoading(false);
      setError(true);
    } else {
      setError(false);
      setData(response);
      setLoading(false);
      console.log(data);
    }
  };

  setTimeout(() => {
    setInit(false);
  }, 6000);

  if (init) return <Logo />;

  return (
    <div className="App">
      <img src={ImgLogo} alt="img" className="logoIcon" />
      <input
        type="text"
        onChange={(e) => setNameCity(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? dataCity(nameCity) : null)}
      />
      <button onClick={() => dataCity(nameCity)}>Search</button>

      {loading ? (
        <IconInitial />
      ) : error ? (
        <>
          <Error message={message} />
        </>
      ) : (
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          className="tilt"
        >
          <Card data={data} />
        </Tilt>
      )}
    </div>
  );
}

export default App;
