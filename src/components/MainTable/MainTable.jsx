import { Table } from "antd";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Describtion",
    dataIndex: "describtion",
    key: "describtion",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
const data = [
  {
    id: "1",
    title: "John Brown",
    describtion: 32,
    price: "New York No. 1 Lake Park",
    action: "",
  },
];
const MainTable = () => <Table columns={columns} dataSource={data} />;
export default MainTable;
