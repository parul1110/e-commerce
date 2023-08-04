export default function SearchBar({onChange}){
    return (
        <div className="searchbar">
            <h3 className ="">Product List</h3> 
            <input type ="text" onChange={onChange} />
        </div>
    );
}