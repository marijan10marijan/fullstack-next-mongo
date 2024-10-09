export default function Home() {
  return (
    <div className="px-4 sm:px-0">
      <h1 className="text-center text-2xl sm:text-4xl font-semibold text-gray-700 leading-8 my-8">
        Welcome to our next <br />{" "}
        <span className="text-indigo-700 text-3xl sm:text-5xl font-bold">
          auth application
        </span>{" "}
      </h1>
      <p className="text-center text-gray-600 text-sm leading-5 sm:leading-6 max-w-[540px] mx-auto mb-12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,
        in doloribus. Nesciunt nulla nostrum, soluta voluptas maiores cum iure
        quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        eum molestias cupiditate omnis qui tempore labore nostrum minima, ad
        alias.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto px-6">
        <article className="min-h-20 py-4 px-6 rounded-md border-gray-600 border shadow-md flex items-center justify-center">
          <p className="text-2xl text-indigo-700">Article 1</p>
        </article>
        <article className="min-h-20 py-4 px-6 rounded-md border-gray-600 border shadow-md flex items-center justify-center">
          <p className="text-2xl text-indigo-700">Article 2</p>
        </article>
        <article className="h-20 py-4 px-6 rounded-md border-gray-600 border shadow-md flex items-center justify-center">
          <p className="text-2xl text-indigo-700">Article 3</p>
        </article>
        <article className="h-20 py-4 px-6 rounded-md border-gray-600 border shadow-md flex items-center justify-center">
          <p className="text-2xl text-indigo-700">Article 4</p>
        </article>
      </div>
    </div>
  );
}
