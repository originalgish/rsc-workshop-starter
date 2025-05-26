import { prisma } from '@/db';
import { ClientComponent } from './_components/ClientComponent';
import { ServerComponent } from './_components/ServerComponent';

export default function ClientServerPage() {
  const mutateData = async () => {
    'use server';

    const result = await prisma.contact.findMany();
    return result[0].first as string;
  };

  return (
    <div>
      ClientServerPage
      <ClientComponent content={<ServerComponent />} mutateData={mutateData}>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
