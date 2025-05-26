'use client';

import { useTransition } from 'react';
import SubmitButton from '@/components/ui/SubmitButton';
import { deleteContact } from '@/data/actions/deleteContact';

export const DeleteContactButton = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={() => {
        startTransition(async () => {
          await deleteContact(id);
        });
      }}
    >
      <SubmitButton
        loading={isPending}
        theme="destroy"
        onClick={e => {
          const response = confirm('Are you sure you want to delete this contact?');
          if (!response) {
            e.preventDefault();
          }
        }}
      >
        Delete
      </SubmitButton>
    </form>
  );
};
