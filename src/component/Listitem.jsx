import React from "react";
import { useState } from "react";
import logo from "../assets/react.svg";

const Listitem = () => {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];
  //   const [name, setName] = useState("ali");
  //   console.log(name);

  //   const ChangeName = (name) => {
  //     setName(name);
  //   };

  return (
    <>
      <p>ListItem</p>
      <h2>{name}</h2>
      {/* <button onClick={() => setName("asif")}>change Name</button> */}

      {people.map((ele, index) => {
        return (
          <ul style={{ backgroundColor: "red" }} key={index}>
           <li> <img src={logo} alt="" /></li>
            <li>{ele.name}</li>
            <li>{ele.profession}</li>
          </ul>
        );
      })}
    </>
  );
};

export default Listitem;
