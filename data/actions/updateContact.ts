'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import { contactSchema } from '@/validations/contactSchema';

export const updateContact = async (id: string, formData: FormData) => {
  await slow();

  const data = Object.fromEntries(formData);
  const result = contactSchema.parse(data);

  await prisma.contact.update({
    data: result,
    where: { id },
  });

  redirect(`/contacts/${id}`);
};
