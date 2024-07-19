import React, { useEffect, useState, useRef } from 'react';

const StudentDashboard = () => {
  const [unique, setUnique] = useState(false);
  const userNameRef = useRef();

  const setUser = () => {
    const userName = userNameRef.current.value;
    sessionStorage.setItem('user', userName);
  };

  useEffect(() => {
    const isNewUser = sessionStorage.getItem('user');
    if (isNewUser) {
      setUnique(true);
    }
  }, []);

  return unique ? (
    <>not new</>
  ) : (
    <div className="flex flex-col gap-12 items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Enter your name</h1>
      <input
        type="text"
        placeholder="Eg: John Doe"
        className="border h-16 w-80 rounded-2xl p-4"
        ref={userNameRef}
      />
      <button
        className="bg-yellow-500 rounded-xl p-2 w-32 shadow-lg hover:bg-yellow-600"
        onClick={setUser}
      >
        Proceed
      </button>
    </div>
  );
};

export default StudentDashboard;
