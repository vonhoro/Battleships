import React from "react";

function Ships(props) {
  //gets the function shiptypes from app

  let shipTypes = props.Ships;

  //gives drag funcition and tansrfer the id of the item

  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("ship", target.id);
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="Ships">
      {shipTypes.Structure.map((shipContainer, index) => (
        <div
          className={shipTypes.Names[index] + "-container  Vertical"}
          id={index}
          key={index + 1}
          onDragStart={dragStart}
          onDragOver={dragOver}
          draggable={props.Drag}
        >
          {shipContainer.map((shipStructure, subIndex) => (
            <div className={shipTypes.Names[index]} key={subIndex}>
              {shipStructure}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Ships;
