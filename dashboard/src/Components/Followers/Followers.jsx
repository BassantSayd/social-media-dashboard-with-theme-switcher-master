import { useState, useEffect } from "react";

function Followers() {
  const [Followers, setFollowers] = useState([]);

  useEffect(() => {
    function CallApi() {
      fetch('https://localhost:3000/Followers')
        .then((response) => response.json())
        .then((finalResult) => setFollowers(finalResult));
    }
    CallApi();
  }, []);

  return (
    <div>
      {Array.isArray(Followers) &&
        Followers.map((follower) => {
          return (
            <div key={follower.platform}>
              <h1>{follower.platform}</h1>
              <h1>{follower.username}</h1>
              <h1>{follower.metric}</h1>
              <h1>{follower.value}</h1>
              <h1>{follower.change}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default Followers;