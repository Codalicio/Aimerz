import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const Form = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    return;
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-900 text-white flex justify-center items-center"
      >
        <div className="bg-red-900 w-[600px] flex flex-col justify-center items-center border-5 border-white rounded">
          <div className="m-5">
            <label className="mx-5" htmlFor="name">
              Username :
            </label>
            <input
              className="border-2 border-white w-[300px] p-2 rounded"
              type="text"
              name="userName"
              id="name"
              placeholder="Enter your username"
              {...register("name")}
            />
          </div>
          <div className="m-5">
            <label className="mx-9" htmlFor="email">
              Email :
            </label>
            <input
              className="border-2 border-white w-[300px] p-2 rounded"
              type="email"
              name="userEmail"
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="m-5">
            <label className="mx-6" htmlFor="password">
              Password :
            </label>
            <input
              className="border-2 border-white w-[300px] p-2 rounded"
              type="password"
              name="userPassword"
              id="password"
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>
          <div className="m-5">
            <label className="mx-9" htmlFor="phone">
              Phone :
            </label>
            <input
              className="border-2 border-white w-[300px] p-2 rounded"
              type="tel"
              name="userPhone"
              id="phone"
              placeholder="Enter your phone number"
              {...register("phone", { required: true, minLength: 10 })}
            />
          </div>
          <div className="my-5">
            <button className="border-2 border-white rounded p-2 hover:bg-white hover:border-2 hover:border-black hover:text-black w-[300px]">
              Submit
            </button>
          </div>
        </div>
      </form>
      <button
        className="w-[200px] border-2 border-gray-300 bg-gray-700 text-white rounded p-2"
        onClick={goBack}
      >
        Go Back
      </button>
    </>
  );
};

export default Form;
