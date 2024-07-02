import { useEffect } from "react";

// 背景色を変更するカスタムフック
export const useBgColor = () => {
    useEffect(() => {
      // マウント時の処理
      document.body.style.backgroundColor = "lightblue";
  
      // アンマウント時の処理
      return () => {
        document.body.style.backgroundColor = "";
      }
    }, [])
  }
