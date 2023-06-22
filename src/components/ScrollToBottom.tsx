import React, { useEffect, useRef } from "react";

const scrollToBottom = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, []);

  return (
    <div>
      <div ref={scrollRef} />
      {/* 스크롤되는 컨텐츠 */}
      {/* ... */}
    </div>
  );
};

export default scrollToBottom;
