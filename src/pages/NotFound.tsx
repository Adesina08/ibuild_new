import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AppLayout from "@/components/layout/AppLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <AppLayout>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="max-w-md text-justify">
          <h1 className="mb-4 text-4xl font-bold text-center">404</h1>
          <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
          <a
            href="/"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Return to Home
          </a>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFound;
