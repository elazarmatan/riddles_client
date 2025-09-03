import { useRef } from "react";
import { useNavigate } from "react-router";
import login from "../utils/login";
import createPlayer from "../utils/createPlayer";

export default function Login(props: { login: string }) {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <>
      <h1>login</h1>
      <form action="">
        <input type="text" placeholder="username" required ref={username} />
        <input type="password" placeholder="password" required ref={password} />
        <button
          onClick={async (e) => {
            console.log(props.login)
            e.preventDefault();
            let auth = {
              name: username.current?.value,
              password: password.current?.value,
            };
            if (props.login === "exist") {
              const c = await login(auth);
              console.log(c)
              if (c === "err") {
                alert("password or username not exist");
              } else {
                navigate("/mainPage");
              }
            }
            else if(props.login === 'new'){
                const answerCreate = await createPlayer(auth)
                 if (answerCreate === "err") {
                alert("the name exist in system choose another name");
              } else {
                navigate("/mainPage");
              }
            }
          }}
        >
          submit
        </button>
      </form>
    </>
  );
}
