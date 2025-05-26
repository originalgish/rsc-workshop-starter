import { prisma } from '@/db';

export const getContacts = async () => {
  return await prisma.contact.findMany({
    orderBy: {
      first: 'asc',
    },
  });
};
