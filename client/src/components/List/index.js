import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

export function Description({ children }) {
  return <p>{children}</p>;
}

export function Add({ children }) {
  return <button type="button" class="btn btn-info">{children}</button>;
}
