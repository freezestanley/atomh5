import React, {Fragment, useEffect, useState, useRef} from 'react';
import {Form, Input, Select, Button} from 'antd';
import Table from './components/Table';


export default function () {
  const tableRef = useRef(null);
  const CustomSearchForm = Form.create()(({ values, form, onSearchSubmit }) => {
    const { getFieldDecorator } = form;

    const reset = () => {
      form.resetFields();
      // 重置并查询
      tableRef && tableRef.current.search();
    };
    return (
      <div style={{marginBottom: '20px'}}>
        <Form layout="inline">
          <Form.Item label="姓名">
            {getFieldDecorator('name', {
              initialValue: '',
              rules: [],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="年龄">
            {getFieldDecorator('age', {
              initialValue: '',
              rules: [],
            })(<Input />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={onSearchSubmit}>
              查询
            </Button>
            <Button type="default" style={{marginLeft: '10px'}} onClick={reset}>
              重置
            </Button>
          </Form.Item>
        </Form>

      </div>
    );
  });

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },

  ];

  return (
    <div style={{padding: '20px'}}>
      <Table
        ref={tableRef}
        initQuery
        CustomSearchForm={CustomSearchForm}
        columns={columns}
        queryData={({pagination, searchKey}) => {
          console.log('pagination:', pagination);
          console.log('searchKey', searchKey);
          return new Promise((resolve) => {
            resolve({
              success: true,
              data: [
                {
                  name: '张三',
                  age: 24,
                },
                {
                  name: '李四',
                  age: 30,
                },
              ],
            });
          });
          // return new Promise((resolve) => {
          //   queryMediaAcctPage({
          //     acctNo: 'AC202002241834294114',
          //     ...pagination,
          //     ...searchKey,
          //   }).then(res => {
          //     if(res.success){
          //       resolve(data)
          //     }
          //   })
          // });
        }}
      />
    </div>
  );
}
