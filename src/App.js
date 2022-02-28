import React from 'react';
// import Button from './components/atoms/Button';
// import Image from './components/atoms/Image';
// import Text from './components/atoms/Text';
// import Input from './components/atoms/Input';
import Label from './components/atoms/Label';

function App() {
  return (
    <div className="App">
      <>
        {/* <Button text="hello"></Button> */}
        {/* <Image src="https://curearthritis.org/wp-content/uploads/2019/11/Snow-man.jpeg" /> */}
        {/* <Text text="당근친구" /> */}
        {/* <Input type="password" accept="image/*" id="12" /> */}
        <Label linked="id" text="카테고리1" />
      </>
    </div>
  );
}

export default App;
