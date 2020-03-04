import React from 'react';
import {Button} from 'antd';
import { MessageOutlined } from '@ant-design/icons';

function App() {
  return (
    <div>
      hello
      <Button type="danger">按钮</Button>
      <MessageOutlined style={{ fontSize: '16px', color: '#08c' }} />
    </div>
  );
}

export default App;
