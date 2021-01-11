import React from 'react';

type Props = { name: string }

// const ComponentName: React.FunctionComponents<Props> = (props) => {} の形
const Greets: React.FunctionComponent<Props> = (props) => {
   const { name } = props;
   return(
      <div>
         こんにちは {name}さん！
      </div>
   )
}

export default Greets;