'use client';

export const ClientComponent = ({ content, children }: { content: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className="rounded border-2 border-blue-500 p-4">
      {children}
      {content}
      <button
        onClick={() => {
          return alert('123');
        }}
      >
        Click me
      </button>
    </div>
  );
};
