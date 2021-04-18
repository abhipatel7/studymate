import { Input } from 'antd';

const { Search } = Input;

// eslint-disable-next-line no-console
const onSearch = (value) => console.log(value);

const SearchBar = () => (
  <div className="m-6">
    <Search
      placeholder="Enter Faculty Name"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  </div>
);

export default SearchBar;
