import React from "react";

const Slide = ({ index, id, image, actions, selected }) => {
  return (
    <div
      className={"Slide Pointer " + selected}
      onMouseEnter={() => actions.selectSlide(index)}
    >
      <div>
        <img src={image} alt={id} />
      </div>
      <p>{id}</p>
    </div>
  );
};

export default React.memo(Slide);
