'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/db';

export const deleteContact = async (id: string) => {
  await prisma.contact.delete({
    where: { id },
  });

  redirect('/');
};
