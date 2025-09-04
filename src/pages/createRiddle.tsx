import { useEffect, useRef } from "react";
import { Link } from "react-router";
import createRiddle from "../utils/crud/createRiddle";

export default function CreateRiddle() {
  const name = useRef<HTMLInputElement>(null);
  const taskDescription = useRef<HTMLInputElement>(null);
  const correctAnswer = useRef<HTMLInputElement>(null);
  const hint = useRef<HTMLInputElement>(null);
  const timeLimit = useRef<HTMLInputElement>(null);
  const difficulty = useRef<HTMLInputElement>(null);
  return (
    <>
      <h1>create</h1>
      <form action="">
        <input type="text" placeholder="name" ref={name} />
        <input
          type="text"
          placeholder="taskDescription"
          ref={taskDescription}
        />
        <input type="text" placeholder="correctAnswer" ref={correctAnswer} />
        <input type="text" placeholder="hint" ref={hint} />
        <input type="text" placeholder="timeLimit" ref={timeLimit} />
        <input type="text" placeholder="difficulty" ref={difficulty} />
        <button
          onClick={(e) => {
            e.preventDefault();
            const riddle = {
              name: name.current?.value,
              taskDescription: taskDescription.current?.value,
              correctAnswer: correctAnswer.current?.value,
              hint: hint.current?.value,
              timeLimit: timeLimit.current?.value,
              difficulty: difficulty.current?.value,
            };
            
              const answer = createRiddle(riddle);
              console.log(answer);
          }}
        >
          submit
        </button>
      </form>
      <Link to={"/crud"}>crud</Link>
    </>
  );
}
