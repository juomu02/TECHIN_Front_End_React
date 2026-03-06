import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;

function RegistryForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      category: "",
      price: "",
      cover: null,
      reserved: false
    },
  });

  const [categories, setCategories] = useState(null);

  const submitHandler = async (formData) => {
    await axios.post(`${API_URL}/books`, formData);

    reset();

    navigate("/");
  };
  useEffect(() => {
    const categoryList = async () => {
      const response = await axios.get(`${API_URL}/categories`);
      setCategories(response.data);
    };
    categoryList();
  }, []);

  if (!categories) {
    return null;
  }

  return (
    <div className="flex justify-center items-center py-20 z-0">
      <form onSubmit={handleSubmit(submitHandler)} className="ml-5" noValidate>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Pavadinimas:</legend>
          <input
            type="text"
            className="input"
            id="title"
            {...register("title", {
              required: "Įveskite knygos pavadinimą",
              minLength: { value: 3, message: "Ne mažiau kaip 3 simboliai" },
              maxLength: {
                value: 100,
                message: "Ne daugiau kaip 100 simbolių",
              },
            })}
          />
          <p className="label">{errors.title?.message}</p>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Autorius:</legend>
          <input
            type="text"
            className="input"
            id="author"
            {...register("author", {
              required: "Įveskite autorių",
              pattern: {
                value: /^[\p{L} ]*$/u,
                message: "Naudokite tik raides ir tarpus",
              },
            })}
          />
          <p className="label">{errors.author?.message}</p>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Kategorija:</legend>
          <select
            defaultValue="Pick a browser"
            className="select"
            id="category"
            {...register("category", {
              required: "Pasirinkte kategoriją",
            })}
          >
            {/* map is API kategoriju */}
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id.toString()}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <span className="label">{errors.category?.message}</span>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Kaina:</legend>
          <input
            type="text"
            className="input"
            id="price"
            {...register("price", {
              required: "Įveskite kainą",
              validate: {
                positiveNumber: (fieldValue) => {
                  return fieldValue > 0 || "Įveskite teigiamą skaičių";
                },
              },
            })}
          />
          <p className="label">{errors.price?.message}</p>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Paveikslėlis</legend>
          <input
            type="url"
            className="input"
            placeholder="url"
            id="cover"
            {...register("cover", {
              required: "Įveskite paveikslėlio nuorodą ",
              pattern: {
                value:
                  // eslint-disable-next-line no-useless-escape
                  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                message: "Netinkama nuoroda",
              },
            })}
          />
          <p className="label">{errors.cover?.message}</p>
        </fieldset>
        <div>
          <input type="text" />
        </div>

        <div>
          <input
            type="submit"
            value="Registruoti"
            className="btn btn-soft btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
export default RegistryForm;
