import './App.css'
import { useState, ChangeEvent } from 'react'

const parseColor = (color: string) => {
  const style = new Option().style;
  style.color = color;

  return style.color
}

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState('');

  const handleColorChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value} = target;
    if (value.length < 7) {
      setColor('');
      setError('');
    }
    if (value.length === 7) {
      const parsedColor = parseColor(value);
      if (parsedColor){
        setColor(parsedColor);
        setError('');
      }else{
        setError('Ошибка');
        setColor('');
      }
    }
  }
  return (
    <div className='background' style={{backgroundColor: color || (error ? 'red': 'grey')}}>
      <div className='container'>
        <input className='input'
          onChange={handleColorChange}/>
        <div className='result'>
          {color || error}
        </div>
      </div>
    </div>

  )
}

export default App
