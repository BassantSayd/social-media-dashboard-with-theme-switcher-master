import { useState, useEffect } from "react";

function Engagement() {
  const [Engagement, setEngagement] = useState([]);

  useEffect(() => {
    function CallApi() {
      fetch("https://localhost:3000/Engagement")
        .then((response) => response.json())
        .then((Result) => setEngagement(Result));
    }
    CallApi();
  }, []);

  return (
    <div>
      {Array.isArray(Engagement) &&
        Engagement.map((item) => {
          return (
            <div key={item.platform}>
              <h1>{item.platform}</h1>
              <h1>{item.username}</h1>
              <h1>{item.metric}</h1>
              <h1>{item.value}</h1>
              <h1>{item.change}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default Engagement;