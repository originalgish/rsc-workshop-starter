'use client';

import Button from '@/components/ui/Button';
import { deleteContact } from '@/data/actions/deleteContact';

export const DeleteContactButton = ({ id }: { id: string }) => {
  return (
    <form action={deleteContact.bind(null, id)}>
      <Button
        type="submit"
        theme="destroy"
        onClick={e => {
          const response = confirm('Are you sure you want to delete this contact?');
          if (!response) {
            e.preventDefault();
          }
        }}
      >
        Delete
      </Button>
    </form>
  );
};
