import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

{/* dl = description list */}
{/* dt specifies a term in a description or definition list */}
{/* The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element. */}
{/* provides the description, definition, or value for the preceding term ( <dt> ) in a description list ( <dl> ). */}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {/* Get the data from thet emjipediaa.js file  using index*/}
        {/* <Entry 
            emoji={emojipedia[0].emoji} 
            name={emojipedia[0].name}
            description={emojipedia[0].meaning}/>
           <Entry 
            emoji={emojipedia[1].emoji} 
            name={emojipedia[1].name}
            description={emojipedia[1].meaning}/>
           <Entry 
            emoji={emojipedia[2].emoji} 
            name={emojipedia[2].name}
            description={emojipedia[2].meaning}/> */}


            {/* use map function to map emojipedia data to the Entry component */}
           {emojipedia.map(
             function createEntry(eachEmoji){
                return <Entry 
                  key={eachEmoji.id}
                  emoji={eachEmoji.emoji}
                  name={eachEmoji.name}
                  description={eachEmoji.meaning}
                />
              })
}
      </dl>
    </div>
  );
}

export default App;