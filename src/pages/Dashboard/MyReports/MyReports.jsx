import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

const MyReports = () => {
  const data = [
    {
      date: "12.09.22",
      address: "3275 NW 24th St, Miami, FL",
    },
    {
      date: "11.09.23",
      address: "3275 NW 24th St, Miami, FL",
    },
    {
      date: "09.10.22",
      address: "3275 NW 24th St, Miami, FL",
    },
    {
      date: "22.07.22",
      address: "3275 NW 24th St, Miami, FL",
    },
    {
      date: "19.09.22",
      address: "3275 NW 24th St, Miami, FL",
    },
  ];
  return (
    <div>
      <TableContainer className="w-[80%] h-fit mx-auto mt-10 bg-white border rounded-md shadow-lg">
        <h1 className="p-2 ml-4 font-semibold text-lg">My Reports</h1>
        <Table variant="simple" size="lg">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Address</Th>
              <Th>Download</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index}>
                <Td>
                  <div className="text-gray-500 flex items-center">
                    <LuCalendarDays className="mr-2 text-blue-400" />
                    {item.date}
                  </div>
                </Td>
                <Td className="text-gray-500">
                  <div className="flex gap-2 items-center">
                    <AiOutlineClockCircle className="text-blue-400" />
                    {item.address}
                  </div>
                </Td>
                <Td>
                  <Button>
                    <MdOutlineDownloadForOffline className="text-blue-400" />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyReports;
