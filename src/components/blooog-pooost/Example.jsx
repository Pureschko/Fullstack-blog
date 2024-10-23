import React from "react";
import styles from "./bubble.module.css";

const Example = () => {
  return (
    <div>
      <div className="grid h-[200px] lg:h-[100px] place-content-center bg-neutral-100">
        <BubbleText />
      </div>
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-[64px] font-thin text-indigo-600">
      {"Blllooooog-Possssssst".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Example;
