export default function Home() {
  return (
    <section className="w-full bg-gray-950 text-gray-100 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Search GitHub Users
        </h2>

        <p className="text-gray-400 text-lg">
          Find GitHub profiles instantly using usernames and explore their work.
        </p>

        <div className="flex justify-center">
          <span className="inline-block h-1 w-24 bg-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}
