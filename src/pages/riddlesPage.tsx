import { useLocation, useNavigate } from "react-router";
import { useState,useEffect } from "react";
import getRiddlesById from "../utils/crud/getRiddlesByLevel";

export default function RiddlesPage() {
    const location = useLocation()
    const level = location.state?.level
  const [dataRiddles, setRiddles] = useState<
    Array<{
      name: string;
      taskDescription: string;
      hint: string;
      difficulty: string;
      riddle_id: number;
    }>
  >([]);

  useEffect(() => {
      getRiddlesById(setRiddles,level)
      },[])
  const navigate = useNavigate();
  return (
    <>
      {dataRiddles.length > 0 ? (
        <>
          <p>{dataRiddles[2].taskDescription}</p>
          <p>{dataRiddles[2].name}</p>
          <input type="text" placeholder="answer" />
          <button
            onClick={() => {
              navigate("/finish");
            }}
          >
            submit
          </button>
        </>
      ) : (
        <p>not riddles to load</p>
      )}
    </>
  );
}
