const Card = ({ image, title, description }) => {
  return (
    <>
      <div className="w-[20%] p-2 border-gray-300 border-2">
        <img
          className="w-[100%]"
          src={image}
          alt="Kadhai paneer pizza"
          loading="lazy"
        />
        <h1 className="font-semibold my-2">{title}</h1>
        <p className="text-gray-700">{description}</p>
        <button className="my-3 bg-green-600 p-2 w-[100%] text-white rounded">
          View More
        </button>
      </div>
    </>
  );
};

export default Card;
