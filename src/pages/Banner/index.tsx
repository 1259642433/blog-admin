import React from 'react';
import { Table, Space, message, Button } from 'antd';
import styles from './style.less';

import { BannerItem } from './data'

const columns = [
  {
    title: '编号',
    dataIndex: 'id',
    key: 'id',
    render: (text:Int32Array) => <p>{text}</p>,
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    render: (text:string) => <p>{text}</p>,
  },
  {
    title: '图片地址',
    dataIndex: 'url',
    key: 'url',
    render: (text:string) => <p>{text}</p>,
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: tags => (
  //     <span>
  //       {tags.map(tag => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </span>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (record:BannerItem) => (
      <Space size="middle">
        <a onClick={()=>handleChange(record.id)}>修改</a>
        <a onClick={()=>handleDelete(record.id)}>删除</a>
      </Space>
    ),
  },
];

const list = [
  {
    id: 1,
    title: '轮播1',
    url: '/file/1.jpg',
  },
  {
    id: 2,
    title: '轮播2',
    url: '/file/2.jpg',
  },
  {
    id: 3,
    title: '轮播3',
    url: '/file/3.jpg',
  },
];

function getList(){
  
}

function handleChange(id:number){
  message.info(`操作：修改，点击了${String(id)}`);
}

function handleDelete(id:number){
  message.info(`操作：删除，点击了${String(id)}`);
}

const Banner: React.FC<{}> = () => {
  return (
    <div>
        <Table
          rowKey={record=>record.id}
          columns={columns}
          pagination={{ position: ['bottomCenter'] }}
          dataSource={list}
        />
    </div>
  );
};

export default Banner;