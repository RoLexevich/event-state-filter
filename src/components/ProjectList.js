import PropTypes from "prop-types";

function ProjectList(props) {
  const { projects } = props;

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <img alt={project.category} className="project-img" key={index} src={project.img} />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
