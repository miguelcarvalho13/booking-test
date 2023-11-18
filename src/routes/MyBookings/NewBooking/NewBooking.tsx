import { Modal } from '@mantine/core';

export const NewBooking = () => {
  return (
    <Modal.Root opened={true} onClose={() => {}}>
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>New Booking content</Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
