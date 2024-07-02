import { useCallback, useState } from "react";

// カウンターと非表示表示のカスタムフック
export const useCounter = () => {
    const [count, setCount] = useState(1);
    const [isShow, setIsShow] = useState(true);
  
    const handleClick = useCallback(() => {
      setCount((prevCount) => prevCount + 1);
    }, [count]);
  
    const handleDisplay = useCallback(() => {
      setIsShow((prevIsShow) => !prevIsShow)
    }, []);
  
    return { count, isShow, handleClick, handleDisplay };
  }
