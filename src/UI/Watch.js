import React, { useEffect, useState } from "react";

import classes from './Watch.module.css';

const Watch = (props) => {
  const [d, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {

      setDate(new Date());

    }, 1000);
  }, []);

  //another way of doing it
//   let h = d.getHours().toString().padStart(2, "0");
//   const m = d.getMinutes().toString().padStart(2,'0');
//   const s = d.getSeconds().toString().padStart(2, "0");

  const gettingLocalTime = d.toLocaleTimeString();

//   return <h3>{h} : {m} : {s}</h3>;

return (
  <React.Fragment>
    <div className={classes['background-content']}>
      <div className={classes["background-watch"]}>{gettingLocalTime}</div>
    </div>
  </React.Fragment>
);

};

export default Watch;
