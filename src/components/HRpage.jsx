
import React, { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function HRpage() {
  const initialData = {
    Sales: ['Sales File 1', 'Sales File 2', 'Sales File 3'],
    Marketing: ['Marketing File 1', 'Marketing File 2'],
    SEO: ['SEO File 1', 'SEO File 2', 'SEO File 3', 'SEO File 4']
  };

  const [currentFolder, setCurrentFolder] = useState(null);

  const handleFolderClick = (folderName) => {
    setCurrentFolder({
      name: folderName,
      files: initialData[folderName]
    });
  };

  const handleBackClick = () => {
    setCurrentFolder(null);
  };

  return (
    <div className='flex m-3 '>
      <div className='h-screen w-screen'>
      {currentFolder ? (
        <div className=' w-10/12'>
          <button onClick={handleBackClick} className="hover:text-blue-400 text-gray-800 font-bold  rounded "><KeyboardBackspaceIcon /></button>
          <h2 className='text-xl text-blue-700 p-3'>{currentFolder.name}</h2>
          <div className=''>
          <table className=' w-full table-auto'>
            <thead  >
              <tr >
                <th className="">Folder Name</th>
                <th className="">Date</th>
                <th className="">Owner</th>
              </tr>
            </thead>
            <tbody className='*:border-b'>
              {currentFolder.files.map((file, index) => (
                <tr key={index} className=''>
                  <td className="px-4 py-2 cursor-pointer text-sm hover:text-blue-600">
                    {file}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      ) :
        (
          <div className='w-10/12'>
            <h1 className='text-xl text-blue-700 '>Containers List</h1>
            
            <table className="mt-6  w-full  px-3 py-5 table-auto ">
              <thead>
                <tr className=''>
                  <th className=" ">Anonymous access level</th>
                  <th className="  ">Folder Name </th>
                  <th className=" ">Last Modified</th>

                </tr>
              </thead>
              <tbody className='*:border-b '>
                <tr>
                  <td onClick={() => handleFolderClick('Sales')} className="cursor-pointer py-2 px-4  text-sm hover:text-blue-600 ">Sales</td>
                </tr>
                <tr>
                  <td onClick={() => handleFolderClick('Marketing')} className="cursor-pointer  py-2 px-4  text-sm hover:text-blue-600">Marketing</td>
                </tr>
                <tr>
                  <td onClick={() => handleFolderClick('SEO')} className="cursor-pointer  py-2 px-4  text-sm hover:text-blue-600">SEO</td>
                </tr>
              </tbody>
            </table>
            
          </div>

        )}
    </div>
    </div>
  );
}

export default HRpage;

