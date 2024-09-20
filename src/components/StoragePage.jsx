
function StoragePage() {
  return (
    <div className="bg-gray-150 h-screen w-full fixed flex flex-col">

      <header className="bg-blue-700 h-12 flex items-center justify-center w-full">
        <h1 className="text-white text-xl">Azure Blob Storage</h1>
      </header>

      <section className="flex flex-grow">
        <aside className="w-60 bg-gray-100 p-4 shadow-md border-1">
          <ul >
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </aside>

        <main className="p-5 flex-grow">
          <h1 className="text-3 font-bold">Hello Users!</h1>
          <div className="border-blue-200 border-2 mt-4 h-30 ">
            <p>your content here</p>
          </div>
          <div className="border-blue-200 border-2 mt-4 h-30 ">
            <p>your content here</p>
          </div>
        </main>
      </section>
    </div>
  );
}

export default StoragePage;
