import React from "react";
import ListElement from "./ListElement.jsx";

const List = ({ studentList, getStudents }) => (
  <div>
    {studentList.map((student) => (
      <ListElement student={student} getStudents={getStudents} />
    ))}
  </div>
);

export default List;
