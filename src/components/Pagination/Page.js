import React, { useEffect } from 'react'
import Tablepage from './Tablepage';

const Page = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const json = await response.json();
                console.log("Fetched data:", json);
                setData(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

  return (
    <div>
      <Tablepage data={data} />
    </div>
  )
}

export default Page;

