import React from "react";
import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );

  return (
    <>
      <ul>
        {courses.map((course, i) => (
          <>
            <li
              key={i}
              className={`course-item`}
              style={{
                backgroundColor: course.completed ? "#00FF0044" : "white",
              }}
            >
              <span className="course-item-col-1">
                <input
                  checked={course.completed}
                  type="checkbox"
                  onChange={(e) => toggleCourseStatus(course.id)}
                />
              </span>

              <span style={{ color: "black" }}>{course?.title}</span>
              <button
                onClick={() => removeCourse(course.id)}
                className="delete btn"
              >
                Delete
              </button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default CourseList;
