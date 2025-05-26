import { notFound } from 'next/navigation';
import { prisma } from '@/db';

export const getContact = async (id: string) => {
  const contact = await prisma.contact.findUnique({
    where: {
      id,
    },
  });

  if (!contact) {
    notFound();
  }

  return contact;
};
