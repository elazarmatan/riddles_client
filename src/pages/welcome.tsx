import { useNavigate } from "react-router";
import getToken from "../utils/getToken";
import checkToken from "../utils/checkToken";

export default function Welcome(props: { setLogin: Function }) {
  const navigate = useNavigate();
  const token = getToken();
  if (token) {
    checkToken(token).then((res) => {
      if (res === true) navigate("/mainPage");
    });
  }

  return (
    <>
      <h1>welcome</h1>

      <>
        <button
          onClick={() => {
            props.setLogin("exist");
            navigate("/login");
          }}
        >
          user Exist
        </button>
        <button
          onClick={() => {
            props.setLogin("new");
            navigate("/login");
          }}
        >
          new user
        </button>
        <button
          onClick={() => {
            navigate("gamePage");
          }}
        >
          guest
        </button>
      </>
    </>
  );
}
