import './App.css';
import TasksList from './components/TaskList';

function App() {
  return (
    <div className="App-task">
      <div className='list'>
        <h1>My Tasks</h1>
        <TasksList/>
      </div>
    </div>
  );
}
 
export default App;
