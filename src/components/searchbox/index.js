//Functional Component
function SearchBox(props) {
    return (
        <div> 
            <input onChange={props.change} type='text' className="search-box" placeholder="Enter name"/>
        </div> 
    );
  }
  
export default SearchBox;
