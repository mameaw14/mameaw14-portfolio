import {Title} from "./components/Title";

const headerItems = [
  'studying Computer Engineering at Kasetsart University',
  'Silver medal ⬝ The Tenth Thailand Olympiad in informatics (TOI10)',
  'internship @enterdock',
  'internship @wongnai',
  'part-time @erudite'
]

function App() {
  return (
    <div className="font-serif bg-bg text-primary flex">
      <div className="top-0 p-4">
        <Title name="MAMEAW14"/>
      </div>
      <div className="mt-16 ml-8">
        <div className="text-5xl">Pinyaporn Eiammongkol</div>
        <a href="https://github.com/mameaw14" target="_blank" rel="noreferrer">https://github.com/mameaw14</a>
        <ul className="list-[square] list-inside">
          {headerItems.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
