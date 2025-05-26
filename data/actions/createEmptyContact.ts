'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export const createEmptyContact = async () => {
  await slow();

  const contact = await prisma.contact.create({
    data: {},
  });

  revalidatePath('/');

  redirect(`/contacts/${contact.id}/edit`);
};
