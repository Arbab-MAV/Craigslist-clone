export default function Footer() {
  return (
    <footer className="bg-gray-300 border-t border-gray-400 mt-12">
      <div className="px-6 py-6 flex items-center justify-center gap-8">
        <button className="text-primary hover:underline text-sm font-medium transition-colors">
          about us
        </button>
        <button className="text-primary hover:underline text-sm font-medium transition-colors">
          contact
        </button>
        <button className="text-primary hover:underline text-sm font-medium transition-colors">
          vision
        </button>
      </div>
    </footer>
  );
}
