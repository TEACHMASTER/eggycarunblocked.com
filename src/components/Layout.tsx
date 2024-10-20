import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen h-screen bg-[url('/bg-diamante.svg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-blue-200 bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div className="flex-grow flex justify-center px-4 py-8 relative z-10">
        <div className="w-full max-w-6xl bg-transparent rounded-lg overflow-hidden">
          <main className="p-6">
            {children}
          </main>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Layout;
