import { FC } from 'react'

export type Character = {
   id: number;
   name: string;
   grade: number;
   height?: number
}

type Props = {
   school: string;
   characters: Character[]
}

type Style = {
   border: string;
   padding: number;
   marginBottom: number;
   listStyle: string;
   width: string;
}

const style: Style = {
   border: '1px solid black',
   padding: 5,
   marginBottom: 5,
   listStyle: 'none',
   width: '40%'
}

const CharacterList: FC<Props> = ({ school, characters }) => (
   <>
      <h2>{school}</h2>
      <ul>
         {characters.map((character) => (
            <li key={character.id} style={style}>
               <p>{character.name}</p>
               <p>{character.grade}年生</p>
               {/* 三項演算子ver */}
               {/* <p>{character.height ? character.height : '???'}cm</p> */}
               {/* nullish coslescing ver */}
               {/* nullish coslescingとはES2020から実装された記法のこと */}
               <p>{character.height ?? '???'}cm</p>
            </li>
         ))}
      </ul>
   </>
)

export default CharacterList;