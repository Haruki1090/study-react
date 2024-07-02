import { useCallback, useState } from "react";

// 入力と配列操作のカスタムフック
export const useInputArray = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);
  
    const handleInputChange = useCallback((e) => {
      if (e.target.value.length > 10) {
        alert("10文字以内で入力してください")
        return;
      }
      setText(e.target.value)
    }, []);
  
    const handleAdd = useCallback(() => {
      setArray((prevArray) => {
        if (prevArray.some((item) => item === text)) {
          alert("同じ要素が既に存在します");
          return prevArray;
        }
        return [...prevArray, text];
      });
    }, [text]);
  
    return { text, array, handleInputChange, handleAdd };
  }
