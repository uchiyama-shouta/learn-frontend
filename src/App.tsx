import React, { FC } from 'react';
import CharacterList, {Character} from './component/CharacterList'
import Greets from './component/Greets'

const App: FC = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: '桜木花道',
      grade: 1,
      height: 189.2,
    },
    {
      id: 2,
      name: '流川 楓',
      grade: 1,
      height: 187.2,
    },
    {
      id: 3,
      name: '宮城リョータ',
      grade: 2,
      height: 168,
    },
    {
      id: 4,
      name: '三井 寿',
      grade: 3,
    },
    {
      id: 5,
      name: '赤木剛憲',
      grade: 3,
      height: 197,
    },
  ]
  return (
    <div>
      <p>hello world</p>
      <Greets name='Tom' />
      <div>
        <CharacterList school='湘北高校' characters={characters} />
      </div>
    </div>
  );
}

export default App;
