const Container = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <main className='mx-auto px-6 sm:px-8 md:px-10 xl:px-0 md:w-[96%] lg:w-[80%] '>
      {children}
    </main>
  );
}
export default Container;