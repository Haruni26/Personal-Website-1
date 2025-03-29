import React, { useState, useEffect } from "react";

// Possibly expand this to be a entire header file with the clock function within
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="header-container">
      <div className="header-text">
        <div>No Such Thing As Luck</div>
        <div>
          Site is Sitll in Early Development, Working on a Mobile Friendly
          version!
        </div>
        <span>Time: {formatTime()}</span>
      </div>
    </div>
  );
}
export default DigitalClock;
