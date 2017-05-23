import React from 'react';
import '../styles/note-list.css';

const NoteList = ({ noteList }) => (
  <div className="note-list">
    <ul>{noteList.map(item => (
      <li>
        <div>{item.title}</div>
        <div>{item.content}</div>
      </li>
      ))}
    </ul>
  </div>
);

export default NoteList;
