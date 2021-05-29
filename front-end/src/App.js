import './App.css';

function App() {
  return (
    <div>
      <h2>Add a new task to your to-do list</h2>
      <br></br>
      <input type="text" class="custom-input" onChange={this.handleChange} />
      &nbsp;
      <br></br>
      <button class="custom-button" onClick={this.handleSubmit}>Add</button>
      <br></br>
    </div>
  );
}

export default App;
