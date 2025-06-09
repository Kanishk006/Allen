import "../Styles/choice.css"

const Courses = () => {
  const courses = [
    {
      title: "JEE Courses",
      image:
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079766/jee_vd0eql.webp",
      link: "#",
    },
    {
      title: "NEET Courses",
      image:
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079856/U_neet_ngbo57.webp",
      link: "#",
    },
    {
      title: "Courses for class 6–10",
      image:
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079855/grade_6_10_ilhkeb.webp",
      link: "#",
    },
  ];

  return (
    <div className="courses-container">
      <h2 className="courses-title">Pick the right course for you</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.title}>
            <h3 className="course-title">{course.title}</h3>
            <a href={course.link} className="course-link">
              View Courses →
            </a>
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;