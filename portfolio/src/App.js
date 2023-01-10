const headerItems = [
  'studying Computer Engineering at Kasetsart University',
  'Silver medal ⬝ The Tenth Thailand Olympiad in informatics (TOI10)',
  'internship @enterdock',
  'internship @wongnai',
  'part-time @erudite'
]

function App() {
  return (
    <div>
      <h1 className="text-9xl">MAMEAW14</h1>
      <div className="text-5xl">Pinyaporn Eiammongkol</div>
      <a href="https://github.com/mameaw14" target="_blank" rel="noreferrer">https://github.com/mameaw14</a>
      <ul style={{listStyleType: "square"}} className="list-disc list-inside">
        {headerItems.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
