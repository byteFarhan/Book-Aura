import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import useFilterListedBooks from "../../hooks/useFilterListedBooks";
const PagesToRead = () => {
  const books = useLoaderData();
  //console.log(books);
  const [storedReadBooksId, setStoredReadBooksId] = useState([]);
  const getDataFromLocalStorage = (keyName) => {
    const data = JSON.parse(localStorage.getItem(keyName));
    if (data) {
      return data;
    }
    return [];
  };
  useEffect(() => {
    const newReadBooks = getDataFromLocalStorage("readBooks");
    setStoredReadBooksId(newReadBooks);
  }, []);

  const readBooks = useFilterListedBooks(storedReadBooksId, books);
  //console.log(readBooks);
  const makeChartdata = (books) => {
    const data = [];
    for (const book of books) {
      const item = {
        bookName: `${book.bookName.split(" ")[0]} ${
          book.bookName.split(" ")[1]
        }...`,
        // bookName2: book.bookName.split(" ")[1],
        // bookName: book.bookName,
        totalPages: book.totalPages,
      };
      data.push(item);
    }
    return data;
  };
  const data = makeChartdata(readBooks);
  //console.log(data);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  // const data2 = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <section className="flex items-center justify-center p-6 mb-10 lg:p-10 bg-base-200 rounded-2xl">
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <BarChart
        width={1000}
        height={700}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
      {/* </ResponsiveContainer> */}
    </section>
  );
};

export default PagesToRead;
