'use client';

export const ClientComponent = ({
  content,
  children,
  mutateData,
}: {
  content: React.ReactNode;
  children: React.ReactNode;
  mutateData: () => Promise<string>;
}) => {
  return (
    <div className="rounded border-2 border-blue-500 p-4">
      {children}
      {content}
      <button
        onClick={async () => {
          const result = await mutateData();
          return alert(result);
        }}
      >
        Click me
      </button>
    </div>
  );
};
