import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { allCourses } from "../allCourses";
function SingleCourse() {
  const data = useParams();
  const { id } = data;

  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    const singleCourseData = allCourses.find((item) => item.id == id);
    setCourseData(singleCourseData);
  }, [id]);

  return (
    <div>
      <h1>Single Course : {id} </h1>
      <h3> {courseData.name}</h3>
      <p>{courseData.desp}</p>
    </div>
  );
}

export default SingleCourse;
