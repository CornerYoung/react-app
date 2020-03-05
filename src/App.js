import React from 'react';
import {Button} from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import FetchDemo from './FetchDemo'

function App() {
  return (
    <div>
      hello
      <Button type="danger">按钮</Button>
      <MessageOutlined style={{ fontSize: '16px', color: '#08c' }} />
      <FetchDemo />
    </div>
  );
}

export default App;
