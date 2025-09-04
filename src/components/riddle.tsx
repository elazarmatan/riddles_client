import { useRef } from "react";

export default function Riddle(props: {
  setCounter: Function;
  riddle: { [key: string]: any };
}) {
  const answer = useRef<HTMLInputElement>(null);
  return (
    <>
      <p>{props.riddle.name}</p>
      <p>{props.riddle.taskDescription}</p>
      <input type="text" placeholder="answer" ref={answer} />
      <button
        onClick={() => {
          if (answer.current?.value === props.riddle.correctAnswer) {
            props.setCounter((prev: number) => prev + 1);
          }
          else{
            alert('answer not correct')
          }
        }}
      >
        submit
      </button>
    </>
  );
}
