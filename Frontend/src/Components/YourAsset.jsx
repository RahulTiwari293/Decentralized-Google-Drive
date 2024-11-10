import React, { useEffect, useState } from "react";

const YourAsset = ({ State }) => {
  let [Files, setFiles] = useState([]);

  useEffect(() => {
    const LoadFiles = async () => {
      const File = await State.Contract.Display(State.Account);
      setFiles(File);
    };
    LoadFiles();
  }, [State.Account, State.Contract]);

  return (
    <div className="h-full overflow-auto p-4 space-y-4">
      {Files &&
        Files.map((File, index) => {
          const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${File.substring(7)}`;
          
          return (
            <div 
              key={index} 
              className="border border-gray-700 rounded-lg bg-slate-800 p-6 shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <a
                    href={ipfsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                  >
                    {ipfsUrl}
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={ipfsUrl}
                    className="h-24 w-24 object-cover rounded-lg"
                    alt="IPFS Asset"
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default YourAsset;