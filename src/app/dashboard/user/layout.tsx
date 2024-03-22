import Navigation from "@/components/NavBar/ProfileNavIcon/Navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen-lg max-h-screen mx-4 lg:mx-auto py-8">
      <div className="flex flex-col md:flex-row h-screen bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-200 dark:border-gray-600">
        <Navigation />
        <div className="w-full dark:bg-medium bg-light px-4 py-4 h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
