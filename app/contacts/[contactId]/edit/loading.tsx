export default function Loading() {
  return (
    <div className="space-y-4 p-4">
      <div className="mb-6">
        <div className="skeleton-animation h-8 w-3/4" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <div className="skeleton-animation mb-2 h-5 w-24" />
          <div className="skeleton-animation h-10 w-full" />
        </div>
        <div>
          <div className="skeleton-animation mb-2 h-5 w-24" />
          <div className="skeleton-animation h-10 w-full" />
        </div>
      </div>

      <div>
        <div className="skeleton-animation mb-2 h-5 w-24" />
        <div className="skeleton-animation h-10 w-full" />
      </div>

      <div>
        <div className="skeleton-animation mb-2 h-5 w-24" />
        <div className="skeleton-animation h-10 w-full" />
      </div>

      <div>
        <div className="skeleton-animation mb-2 h-5 w-24" />
        <div className="skeleton-animation h-24 w-full" />
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <div className="skeleton-animation h-10 w-24" />
        <div className="skeleton-animation h-10 w-24" />
      </div>
    </div>
  );
}
