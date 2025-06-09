import { useState } from "react";
import "./TechStack.css";
const TechStack = () => {
  const data = [
    {
      name: "Node js",
    },
    {
      name: "React js",
    },
    {
      name: "Hono js",
    },
    {
      name: "Javascript",
    },
    {
      name: "Python",
    },
    {
      name: "Typescript",
    },
    {
      name: "C++",
    },
    {
      name: "C#",
    },
    {
      name: "Java",
    },
    {
      name: "symphony",
    },
    {
      name: "Flutter",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "Tailwind",
    },
    {
      name: "Material UI",
    },
    {
      name: "React Native",
    },
    {
      name: "Next js",
    },
  ];

  const colors = [
    "#F1C40F",
    "#4B088A",
    "#8181F7",
    "#FE2EF7",
    "#585858",
    "#800000",
    "#0088FE",
    "#00C49F",
    "#9bb334",
    "#FF8042",
    "#001CCE",
    "#1c5445",
    "#21175c",
    "#FF1042",
    "#847554",
    "#1979ab",
    "#f27940",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(8);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };
  return (
    <div className="container techstack-section">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3" key={index}>
            <div
              className={
                index === 0
                  ? "tech-content-marked tech-content"
                  : "tech-content"
              }
            >
              <span
                className="tech-number"
                style={{ backgroundColor: colors[index] }}
              >
                {index + 1}
              </span>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      {showMoreTechStack >= data.length ? null : (
        <span className="load-more-tech-stack" onClick={loadMore}>
          Load more
        </span>
      )}
    </div>
  );
};

export default TechStack;
