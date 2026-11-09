"use client";

import { createContext, useContext, useState } from "react";

const NoticeContext = createContext(null);

export function useNoticeContext() {
  const context = useContext(NoticeContext);

  if (context === null) {
    throw new Error(
      "useNoticeContext는 NoticeProvider 안에서만 쓸 수 있습니다.",
    );
  }

  return context;
}

export function NoticeProvider({ children }) {
  const [notice, setNotice] = useState(null);

  function showNotice(message) {
    setNotice(message);
    setTimeout(() => setNotice(null), 3000);
  }

  const value = { notice, showNotice };

  return (
    <NoticeContext.Provider value={value}>{children}</NoticeContext.Provider>
  );
}
