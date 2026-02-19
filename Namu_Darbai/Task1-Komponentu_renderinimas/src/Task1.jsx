import profileImage from "./assets/profile.jpg";

function Task1() {
  return (
    <>
      <div className="w-screen p-6 bg-white font-mono">
        <div className="p-5 pt-5 pb-5 bg-blue-100  rounded-3xl text-center">
          <h1 className="text-3xl pb-10">SUBSCRIBE</h1>
          <p className="pb-10">Sign up with your email address to receive news and updates.</p>

          <form className="flex-col" action="submit">
            <div className="flex pt-5 pb-5 gap-10 justify-center">
            <input className="bg-white rounded-2xl p-3" type="text" placeholder="First name" />
            <input className="bg-white rounded-2xl p-3" type="text" placeholder="Last name" />
            <input className="bg-white rounded-2xl p-3" type="email" placeholder="Email" /></div>
            <input className="bg-red-300 pb-3 pt-3 w-80 rounded-2xl text-white font-bold" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Task1;
