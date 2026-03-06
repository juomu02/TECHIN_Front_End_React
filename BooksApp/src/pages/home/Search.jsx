import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function Search({ setProducts }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      author: "",
      category: "",
      reserved: false,
    },
  });

  const [error, setError] = useState("");

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const categoryList = async () => {
      const response = await axios.get(`${API_URL}/categories`);
      setCategories(response.data);
    };
    categoryList();
  }, []);

  const submitHandler = async (query) => {
    try {
      setError("");
      const updatedProducts = await axios.get(`${API_URL}/books`);
      const productsFind = updatedProducts.data.filter((product) => {
        const hasTitleMatch = product.title.includes(query.title);
        const hasAuthorMatch = product.author.includes(query.author);
        const hasCategoryMatch = product.category.includes(query.category);
        const hasReservedMatch = product.reserved === query.reserved;

        return (
          hasTitleMatch &&
          hasAuthorMatch &&
          hasCategoryMatch &&
          hasReservedMatch
        );
      });

      if (productsFind.length === 0) {
        reset();
        throw new Error("Nėra knygų kurios atitinka paieškos parametrus");
      }
      setProducts(productsFind);
    } catch (error) {
      setError(error.message);
    }
  };

  if (!categories) {
    return null;
  }
  return (
    <>
      <div className="search-bar bg-base-100 shadow-sm ml-6">
        <div className="label text-lg pb-5">Surasti knygą</div>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="ml-5"
          noValidate
        >
          <fieldset className="fieldset flex flex-)row gap-2 items-center ">
            <label className="">Kategorija</label>
            <select className="select" {...register("category")}>
              {/* map is API kategoriju */}
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id.toString()}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <label className="ml-5">Rezervuota?</label>
            <input
              type="checkbox"
              className="checkbox"
              {...register("reserved")}
            />
            <label className="ml-5">Pavadinimas</label>
            <input type="text" className="input" {...register("title")} />
            <label className="ml-5" id="author">
              Autorius
            </label>
            <input type="text" className="input" {...register("author")} />
            <button className="btn btn-soft btn-accent" type="submit">
              Ieškoti
            </button>
          </fieldset>
          {error && <p className="label">{error}</p>}
        </form>
      </div>
    </>
  );
}
export default Search;
