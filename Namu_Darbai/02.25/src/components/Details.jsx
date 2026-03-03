import { getOne } from "../services/get";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function Details() {
  const [user, setUser] = useState(null);
  const { userid } = useParams();

  const getUserDetails = async (id) => {
    const user = await getOne(id);
    setUser(() => user);
  };
  useEffect(() => {
    getUserDetails(userid);
  }, [userid]);

  if (!user) return;

  return (
    <div>
      {user.username} {user.channel}
    </div>
  );
}
export default Details;

// "id": "5c79",
//       "username": "Johna",
//       "email": "qa@aa.aa",
//       "channel": "Kevin Powellaaaaaaaaaaaaaaa",
//       "color": "green",
//       "hobbies": [
//         "Traveling"
//       ],
//       "likes": 5
