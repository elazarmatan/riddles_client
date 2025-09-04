import { useLocation, useNavigate } from "react-router";
import { useState,useEffect } from "react";
import getRiddlesById from "../utils/crud/getRiddlesByLevel";
import Riddle from "../components/riddle";

export default function RiddlesPage() {
    const location = useLocation()
    const level = location.state?.level
    const [seconds, setSeconds] = useState(0);
    const [dataRiddles, setRiddles] = useState<
    Array<{
      name: string;
      taskDescription: string;
      hint: string;
      difficulty: string;
      riddle_id: number;
    }>
  >([]);
  const [counter,setRiddle] = useState(0)  
  useEffect(() => {
      getRiddlesById(setRiddles,level)
      },[])
    
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [dataRiddles]);
  useEffect(() => {
    if(counter > 5){
        navigate('/finish',{state:{seconds}})
    }
  },[counter])
  return (
    <>
    <p>{seconds}</p>
      {dataRiddles.length > 0 ? (
        <>
          <Riddle setCounter={setRiddle} riddle={dataRiddles[counter]}/>
        </>
      ) : (
        <p>not riddles to load</p>
      )}
    </>
  );
}