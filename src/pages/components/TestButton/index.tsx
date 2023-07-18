import { Radio, Select } from 'antd';
import React, { useEffect } from 'react';

const Test = () => {
  useEffect(() => {
    console.log('Test');
  }, []);

  return (
    <div>
      <button>点击button</button>
      <Radio.Group defaultValue={0}>
                <Radio value={0}>不提醒</Radio>
                <Radio value={1}>提醒</Radio>
            </Radio.Group>
      <Select style={{ width: 300 }}>
        <Select.Option value="1">111</Select.Option>
        <Select.Option value="2">222</Select.Option>
        <Select.Option value="3">333</Select.Option>
      </Select>
    </div>
  );
};

export default Test;
