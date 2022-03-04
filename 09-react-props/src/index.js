import React from "react";
import ReactDOM from "react-dom";

function Person(props){
  return <div>
    <h2 className = "my-style">{props.name}</h2>
    <img className = "profile-image"
      src = {props.img}
      alt = {props.alt}
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
    <h4>Net worth: {props.money}</h4>
  </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Person 
      name = 'Jim Carrey' 
      img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl6f7CWwdVCgb_bEHUT9ZuoY8wz50EET_dw&usqp=CAU"
      alt="avatar_img"
      tel = "+123 456 789"
      email = "j@carrey.com"
      money = "50$"
    />

    <Person 
        name = 'Jack Bauer' 
        img = "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        alt="avatar_img"
        tel = "+123 456 789"
        email = "jack@nowhere.com"
        money = "40$"
    />

    <Person 
        name = 'Chuck Morris' 
        img = "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        alt="avatar_img"
        tel = "+918 372 574"
        email = "gmail@chucknorris.com"
        money = "10$"
      />
</div>

  ,document.getElementById("root")
);
