export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-16">
      <h1 className="mb-8 text-4xl font-bold tracking-tighter text-center">
        Welcome to the World of Yunz
      </h1>
      <p className="mb-12 text-xl text-center">
        {`Meoww 👋`}
      </p>
      <img 
        src="images/cat.jpg"
        alt="A cute cat"
        className="w-full max-w-4xl rounded-lg shadow-2xl"
      />
    </section>
  )
}
