import profileImage from "./assets/profile.jpg";

function Task1() {
  return (
    <>
      <div className="w-screen p-6 bg-green-600">
        <div className="p-30 pt-5 pb-5 bg-blue-400">
          <h1 className="text-5xl">Welcome to 30 Days Of React</h1>
          <h2 className="text-3x1">Getting Started React</h2>
          <h3 className="text-2x1">JavaScript Library</h3>
          <h4 className="text-sm">Instructor: Asabeneh Yetayeh</h4>
          <p className="text-sm">Date: Oct 3, 2020</p>
        </div>
      </div>

      <div className="w-screen p-6 bg-amber-200">
        <div className="pt-5 pb-5 bg-white">
          <div className="p-30 pt-5 pb-5">
            <div className="p-6 bg-purple-900">
        <div className="pt-5 pb-5 bg-white">
              <p>
                Prerequisite to get started
                <span className="bold">react.js</span>
              </p>
              <ul className="pl-5">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <p>3+2=5</p>
              <p>
                I am Asabeneh Yetayeh. I am 200 years old. I love React and
                thank you for joining 30 Days Of React challenge.
              </p>
            </div>
            </div>
            <div className="p-6 bg-blue-600">
        <div className="bg-white">
              <img className="rounded-full" src={profileImage} alt="profile pic" />
              <p>Asabeneh Yetayeh</p>
            </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-screen p-6 bg-red-500">
        <div className="p-30 pt-5 pb-5 bg-blue-300">
          <p className="text-center">Copyright &#169; 2020</p>
            </div>
          </div>
    </>
  );
}

export default Task1;
