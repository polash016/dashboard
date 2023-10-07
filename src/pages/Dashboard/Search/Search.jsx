import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { CgFileDocument } from "react-icons/cg";

const Search = () => {
  return (
    <div>
      <div className="mx-auto w-[712px] h-[174px] border my-auto lg:mt-20 shadow-lg p-4 bg-white rounded-lg">
        <div>
          <h2 className="font-semibold">Enter An Address</h2>
          <p className="text-sm text-gray-500">
            Generate RealReport With One Search
          </p>
          <div className="flex justify-center items-center mb-4">
            <InputGroup>
              <Input
                height={"64px"}
                className="py-1 pl-2 outline-none border border-blue-200 rounded h-[100px] mt-4"
                type="search"
                placeholder="e.g. 123 Main Street, San Francisco, CA 94105 "
                name="search"
              />
              <InputLeftElement>
                <GrLocation className="text-blue-300 mt-14" />
              </InputLeftElement>
            </InputGroup>
            <button className="bg-[#304CEF] w-[138px] h-[54px] border mt-3 text-white rounded ml-2">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center mt-8 border rounded-xl shadow-xl w-fit mx-auto px-6 py-4">
        <CgFileDocument className="text-3xl text-blue-500" />
        <span className="text-lg font-semibold">Sample Report</span>
      </div>
    </div>
  );
};

export default Search;
