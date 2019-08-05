import React from "react";

const ListGroup = ({
  genres,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem
}) => {
  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          onClick={() => onItemSelect(genre)}
          key={genre[valueProperty]}
          className={
            genre === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
