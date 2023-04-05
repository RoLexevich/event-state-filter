import React from "react";
import Toolbar from "./Toolbar";
import projectListMock from "./ProjectListMock";
import ProjectList from "./ProjectList";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.projects = projectListMock;
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
    this.selectedFilter = "All";

    this.onSelectFilter = (event) => {
      const filter = event.target.innerText;
      const filteredList =
        filter === "All"
          ? this.projects
          : this.projects.filter((proj) => proj.category === filter);
      this.setState((prevState) => ({ projectList: filteredList }));
    };
  }

  state = {
    projectList: projectListMock
  };

  render() {
    const { projectList } = this.state;

    return (
      <div className="main-content">
        <Toolbar
          filters={this.filters}
          selected={this.selectedFilter}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={projectList} />
      </div>
    );
  }
}

export default Portfolio;
