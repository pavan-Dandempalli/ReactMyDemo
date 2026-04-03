import React,{useEffect} from 'react'

const Tablepage = (props) => {

    const data = props.data.products || [];
    console.log("data in table page", data);    
    const [currentPage, setCurrentPage] = React.useState(1);
    const [items, setItems] = React.useState([]);
    const [filteredData, setFilteredData] = React.useState(data);
    const [isPriceFiltered, setIsPriceFiltered] = React.useState(false);


    const itemsPerPage = 10;
    const totalPages = Math.ceil((props.data.products ? props.data.products.length : 0) / itemsPerPage);

   const Max_buttons = 3;

   const numberOfButtons=Array.from({length:totalPages},(_,i)=>i+1);

    const startPage = Math.max(1, currentPage - Math.floor(Max_buttons / 2));
    const endPage = Math.min(totalPages, startPage + Max_buttons - 1);
     

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 
    useEffect(() => {
    setFilteredData(data);
  }, [props.data.products]);


    useEffect(() => {
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    setItems(currentItems);
  }, [currentPage, filteredData]);



   


    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }

    }

   const handlePriceFilter = () => {
   if (isPriceFiltered) {
      // Reset back to original data
      setFilteredData(data);
      setIsPriceFiltered(false);
    } else {
      // Apply sorting
      const sortedArray = [...data].sort((a, b) => a.price - b.price);
      setFilteredData(sortedArray);
      setIsPriceFiltered(true);
    }
    setCurrentPage(1);
  };


    const thStyle = {
        border: "1px solid #ddd",
        padding: "8px",
        fontWeight: "bold",
    };

    const tdStyle = {
        border: "1px solid #ddd",
        padding: "8px",
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Product Table</h2>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                        <th style={thStyle}>ID </th>
                        <th style={thStyle}>Title</th>
                        <th style={thStyle}>Price <span><button onClick={handlePriceFilter}>Filter</button></span></th>
                        <th style={thStyle}>Rating <span><button>Filter</button></span></th>
                        <th style={thStyle}>Weight</th>
                        <th style={thStyle}>Shipping Information</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((product) => (
                        <tr key={product.id} style={{ textAlign: "center" }}>
                            <td style={tdStyle}>{product.id}</td>
                            <td style={tdStyle}>{product.title}</td>
                            <td style={tdStyle}>{product.price}</td>
                            <td style={tdStyle}>{product.rating}</td>
                            <td style={tdStyle}>{product.weight}</td>
                            <td style={tdStyle}>{product.shippingInformation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} style={{ marginRight: "10px" }}>
                    Previous
                </button>
                {/* <span>Page {currentPage} of {totalPages}</span> */}
                {numberOfButtons.slice(startPage-1 , endPage).map((page) => (
                    <button
                        key={page}  
                        onClick={() => handlePageChange(page)}
                        style={{
                            margin: "0 5px",
                            backgroundColor: currentPage === page ? "blue" : "white",
                            color: currentPage === page ? "white" : "black",
                            border: "1px solid #ddd",
                            padding: "5px 10px",
                            borderRadius: "5px",
                        }}
                    >
                        {page}
                    </button>
                ))}

                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} style={{ marginLeft: "10px" }}>
                    Next
                </button>
            </div>
        </div>

    )
}

export default Tablepage
