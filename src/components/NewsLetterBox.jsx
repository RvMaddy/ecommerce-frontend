const NewsLetterBox = () => {
  const onSubmitHandler = event => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subsribe now & get 20%
      </p>
      <p className="text-gray-400 mt-3">
        Lorem. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Incidunt perspiciatis libero amet laboriosam dicta maiores eligendi
        repellat quae sapiente ad commodi similique, iure magnam eum suscipit
        itaque quas. Voluptates, vitae!
      </p>
      <form
        onSubmit={onSubmitHandler}
        action=""
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="enter your mail"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
