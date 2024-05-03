const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4 text-center">Contact Us</h1>
      <form className="flex flex-col items-center space-y-4">
        <input
          type="text"
          className="border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-4"
          placeholder="Your Name"
        />
        <textarea
          className="border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-4"
          placeholder="Your Message"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-4 transition-all transform hover:scale-105 focus:outline-none">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
