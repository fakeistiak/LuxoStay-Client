import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import axios from "axios";
import { useState } from "react";

const UpdateModal = ({ date, id, setRefetch }) => {
  const [updatedDate, setUpdatedDate] = useState("");

  const handleUpdate = () => {
    axios
      .patch("http://localhost:5000/mybookings/" + id, {
        bookingDate: updatedDate,
      })
      .then(() => setRefetch());
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="indigo">
          <Pencil2Icon />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Edit Booking Date</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your booking date.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Date
            </Text>
            <input
              onChange={(e) => setUpdatedDate(e.target.value)}
              defaultValue={date}
              type="date"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleUpdate}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default UpdateModal;
