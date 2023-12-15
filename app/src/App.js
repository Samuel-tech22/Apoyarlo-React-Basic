import './App.css';
import PersonCard from './components/cards/PersonCard';

function App() {
  return (
    <main>
      <PersonCard lastName="Doe" firstName="Jane" age="30" hairColor="Black"/>
      <PersonCard lastName="Smith" firstName="John" age="88" hairColor="Brown"/>
      <PersonCard lastName="Fillmore" firstName="Millard" age="50" hairColor="Brown"/>
      <PersonCard lastName="Smith" firstName="Maria" age="62" hairColor="Brown"/>

    </main>
  );
}

export default App;
