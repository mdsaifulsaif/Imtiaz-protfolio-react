import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <div className="flex justify-center text-red-500 mb-4">
          <FaExclamationTriangle className="text-6xl" />
        </div>
        <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
