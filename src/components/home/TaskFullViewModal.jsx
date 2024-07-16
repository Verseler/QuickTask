import {
  Flex,
  Modal,
  Box,
  useMantineTheme,
  Textarea,
  Button,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { IconAlignJustified } from "@tabler/icons-react";

const TaskFullViewModal = ({ opened, close, selectedTask, actionType }) => {
  const theme = useMantineTheme();
  const form = useForm({
    initialValues: { name: "Untitled", desc: "" },
    validate: {
      name: (value) => (value.length < 0 ? "Name is required" : null),
    },
  });

  /*
   *
   *  On first render and when selected task change
   *  populate the form with selected task data as initial values
   *
   */
  useEffect(() => {
    if (selectedTask && actionType == "edit") {
      form.setValues({
        name: selectedTask?.name || "Untitled",
        desc: selectedTask?.desc || "",
      });
    }
  }, [selectedTask]);

  const handleSubmit = (values) => {
    if (actionType == "edit") {
      console.log("Edit Form values submitted:", values);
    } else {
      console.log("Add Form values submitted:", values);
    }
  };

  return (
    <Modal opened={opened} radius={"md"} onClose={close} size={"xl"} centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex columnGap={16}>
          <Flex flex={1} direction={"column"} h={450}>
            {/* Task Name */}
            <Textarea
              key={form.key("name")}
              {...form.getInputProps("name")}
              placeholder="Task Name"
              size="sm"
              fw={500}
              autosize
              minRows={1}
              w="100%"
              styles={{
                input: {
                  border: "none",
                  paddingBottom: 0,
                  fontSize: 22,
                  padding: 0,
                },
              }}
            />
            {/* Task Description */}
            <Textarea
              key={form.key("desc")}
              {...form.getInputProps("desc")}
              placeholder="Desc"
              size="sm"
              autosize
              minRows={1}
              w="100%"
              styles={{
                input: { border: "none", color: theme.colors.gray[6] },
              }}
              leftSection={<IconAlignJustified size={16} stroke={1} />}
            />
          </Flex>

          <Flex direction={"column"} w={260} bg={theme.colors.secondary[0]}>
            <Box flex={1}></Box>
            <Group gap="xs" p={"xs"} grow>
              <Button
                radius={6}
                onClick={close}
                c={theme.colors.gray[9]}
                color={theme.colors.gray[2]}
              >
                Cancel
              </Button>
              <Button type="submit" radius={6} color={theme.colors.primary[5]}>
                Save
              </Button>
            </Group>
          </Flex>
        </Flex>
      </form>
    </Modal>
  );
};

export default TaskFullViewModal;
