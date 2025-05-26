import { prisma } from '@/db';

export const ServerComponent = async () => {
  const data = await prisma.contact.findMany();

  return (
    <div className="rounded border-2 border-red-500 p-4">
      ServerComponent–
      {data[0].first}
    </div>
  );
};
