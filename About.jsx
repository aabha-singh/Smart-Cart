const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">

      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        About SmartCart 🛒
      </h1>

      <p className="text-gray-600 leading-relaxed">
        SmartCart is a modern shopping application built using React.
        It provides a smooth and fast shopping experience where users can
        browse products, filter categories, and add items to their cart easily.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Our goal is to make online shopping simple, clean, and user-friendly.
        This project is designed for learning React fundamentals like state
        management, component structure, and UI design.
      </p>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="font-semibold text-gray-700">Features:</h2>
        <ul className="list-disc ml-5 text-gray-600 mt-2">
          <li>Product browsing</li>
          <li>Category filtering</li>
          <li>Cart management</li>
          <li>Modern UI design</li>
        </ul>
      </div>

    </div>
  );
};

export default AboutPage;