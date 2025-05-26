'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';

import type { Contact } from '@prisma/client';

export async function toggleFavotite(contact: Contact) {
  await slow();

  await prisma.contact.update({
    data: { ...contact, favorite: !contact.favorite },
    where: {
      id: contact.id,
    },
  });

  revalidatePath(`/contacts/${contact.id}`);
}
