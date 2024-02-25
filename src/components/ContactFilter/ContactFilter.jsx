const Filter = ({ value, onChange }) => (
    <div>
        <p>Find contacts by name</p>
        <input type="text" value={value} onChange={onChange}/>
    </div>
)

export default Filter