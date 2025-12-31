export default function AvailableBadge() {
  return (
    <div className="flex items-center space-x-2 px-3 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      <span className="text-sm font-medium text-green-700 dark:text-green-400">
        Available for work
      </span>
    </div>
  );
}
