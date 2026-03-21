import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const fetchData = async () => {
    const res = await fetch('/data/car.json');
    const data = await res.json();
    setData(data);
    setFilteredData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    filterData(value, selectedBrand);
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    filterData(searchValue, brand);
  };

  const filterData = (searchText, brand) => {
    let filtered = data;
    if (searchText) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (brand) {
      filtered = filtered.filter((item) => item.hang === brand);
    }

    setFilteredData(filtered);
  };

  const brands = [...new Set(data.map((item) => item.hang))];

  return (
    <>
      <input
        type="text"
        placeholder="Search by name"
        value={searchValue}
        onChange={handleSearch}
      />
      <select value={selectedBrand} onChange={handleBrandChange}>
        <option value="">All Brands</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      {filteredData.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.gia}</p>
          <p>{item.hang}</p>
          <p>{item.quoc_gia}</p>
        </div>
      ))}
    </>
  );
};

export default App;