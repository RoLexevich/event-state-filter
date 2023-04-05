function Toolbar(props) {

    const { filters } = props;
    const { onSelectFilter } = props;

    return (
        <div className="toolbar">
                {filters.map((name, index) => ( <button className="filter-button" onClick={onSelectFilter} key={index}> {name} </button>))}
            </div>
    )
}

export default Toolbar;