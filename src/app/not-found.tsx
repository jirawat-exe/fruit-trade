import NotFound from "@/components/404Page";

export default function NotFoundPage() {
  return (
    <div className="d-flex flex-column min-vh-100">

      {/* Main content */}
      <main className="flex-grow-1 container d-flex justify-content-center align-items-center">
        <NotFound />
      </main>

    </div>
  );
}