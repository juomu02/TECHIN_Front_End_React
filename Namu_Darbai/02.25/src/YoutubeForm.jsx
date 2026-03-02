import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import postData from "./services/post.js";

function YoutubeForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      // password: "",
    },

    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const [username, email] = watch(["username", "email"]);

  const submitHandler = (formData) => {
    postData(formData);

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            className="border"
            {...register("username", {
              required: "User name is required",
              maxLength: { value: 10, message: "User name is too long" },
            })}
          />
        </div>
        <div className="error">{errors.username?.message}</div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="text"
            id="email"
            className="border"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" || "Enter different email"
                  );
                },
                notBlacklisted: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("bademail.com") ||
                    "This email is blacklisted"
                  );
                },
              },
            })}
          />
        </div>
        <div className="error">{errors.email?.message}</div>
        <div>
          <label>
            Favorite Channel
            <br />
            <select {...register("channel")} className="border">
              <option value="">-- Select a channel --</option>
              <option value="Code with Ania Kubow">Code with Ania Kubow</option>
              <option value="Kevin Powell">Kevin Powell</option>
              <option value="Net Ninja">Net Ninja</option>
            </select>
          </label>
        </div>
        <div>
          <div>Choose your favorite color:</div>
          <label>
            <input type="radio" value="red" {...register("color")} />
            Red
          </label>
          <label>
            <input type="radio" value="green" {...register("color")} />
            Green
          </label>
          <label>
            <input type="radio" value="blue" {...register("color")} />
            Blue
          </label>
        </div>
        <div>
          <div>Select your hobbies:</div>
          <label>
            <input
              type="checkbox"
              value="Reading"
              {...register("hobbies", {
                validate: (value) => {
                  return value.length > 0 || "You must have a hobbie";
                },
              })}
            />
            Reading
          </label>
          <label>
            <input
              type="checkbox"
              value="Traveling"
              {...register("hobbies", {
                validate: (value) => {
                  return value.length > 0 || "You must have a hobbie";
                },
              })}
            />
            Traveling
          </label>
          <label>
            <input
              type="checkbox"
              value="Cooking"
              {...register("hobbies", {
                validate: (value) => {
                  return value.length > 0 || "You must have a hobbie";
                },
              })}
            />
            Cooking
          </label>
        </div>
        <div className="error">{errors.hobbies?.message}</div>{" "}
        <div>
          {/* <input
            type="password"
            className="bg-green-50"
            placeholder="Enter password"
            {...register("password", { required: "Password is required" })}
          />
          <div className="error">{errors.password?.message}</div> */}
          {/* <input
            type="password"
            className="bg-green-50"
            placeholder="Confirm password"
            {...register("confirm", {
              required: "Confirm password is required",

              validate: (value) => {
                return (
                  value === getValues("password") || "Passwords do not match"
                );
              },
            })}
          /> */}
        </div>
        <div className="error">{errors.confirm?.message}</div>
        <input type="submit" value="Submit" className="bg-amber-200 p-2" />
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
      <div>
        <h1>Form data</h1>
        {{ username } && <p>User name: {username}</p>}
        {{ email } && <p>Email: {email}</p>}
      </div>
    </>
  );
}

export default YoutubeForm;
