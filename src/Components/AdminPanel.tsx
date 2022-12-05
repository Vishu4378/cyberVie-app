import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { viewUser } from "../api";

function AdminPanel() {
  const [User, setUser] = useState<string[]>([]);
  useEffect(() => {
    viewUser().then((res) => {
      console.log(res);
      setUser(res);
    });
  }, []);
  return (
    <div className="bg-gray-600 flex justify-center items-center h-full pt-48 ">
      <div className="grid grid-cols-2 gap-10 bg-gray-800 rounded p-8 ">
        <p className="font-semibold text-gray-200">Name</p>
        <p className="font-semibold text-gray-200">Document</p>
        {User.length == 0 ? (
          <div className="text-white text-sm items-center">
            No user exist please add Documents
          </div>
        ) : (
          <div></div>
        )}
        {User.map((item, i) => {
          const name = item.split("^^^")[0];

          return (
            <>
              <p className="font-semibold text-gray-200">{name}</p>
              <a
                href={"http://localhost:5000/" + item}
                className="text-gray-400"
              >
                check documents
              </a>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AdminPanel;
