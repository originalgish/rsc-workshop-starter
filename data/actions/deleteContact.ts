'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export const deleteContact = async (id: string) => {
  await slow();

  await prisma.contact.delete({
    where: { id },
  });

  redirect('/');
};
