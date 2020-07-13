function WorkPiece({ title, description, imageSrc, imageAlt }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mb-16 px-8">
      <div className="relative">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover rounded-sm border border-gray-300 shadow-md"
          />
        ) : (
          <div className="bg-gray-200 pt-2/3"></div>
        )}
      </div>
      <h3 className="text-xl lg:text-2xl mt-4 mb-2 font-bold">{title}</h3>
      <p className="text-lg lg:text-xl text-gray-900 leading-snug">
        {description}
      </p>
    </div>
  );
}

export default WorkPiece;
