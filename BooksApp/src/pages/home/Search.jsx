// import { useForm } from "react-hook-form";
// import { useState } from "react";

function Search() {

//   const { register, handleSubmit, reset } = useForm({
//     defaultValues: {
//       title: title,
//       author: author,
//     },
//   });

//   const [error, setError] = useState("");

//   const formHandler = async ({ query }) => {
//     try {
//       const allUsers = await getAllData();
//       const usersFind = allUsers.filter((user) =>
//         user.username.includes(query),
//       );
//       if (usersFind.length === 0) throw new Error("No users");
//       setUsers(usersFind);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

  return (
    <>
      <div className="search-bar bg-base-100 shadow-sm ml-6">
        <div className="label text-lg pb-5">Surasti knygą</div>
        {/* {error && <p>{error}</p>} */}
        <form onSubmit={() => {}} className="ml-5" noValidate>
          <fieldset className="fieldset flex flex-)row gap-2 items-center ">
            <label className="">Pavadinimas</label>
            {/* <input type="text" className="input" {...register("title")} /> */}
            <label className=" ml-5" id="author">
              Autorius
            </label>
            {/* <input type="text" className="input" {...register("author")} /> */}
            <button className="btn btn-soft btn-accent">Ieškoti</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
export default Search;
