import {
  Box,
  Checkbox,
  Divider,
  Text,
  Flex,
  useMantineTheme,
} from "@mantine/core";

const TaskItem = ({ name, desc, onClick }) => {
  const theme = useMantineTheme();

  return (
    <Box onClick={onClick} style={{ cursor: "pointer" }}>
      <Flex columnGap={12} mih={40}>
        <Checkbox
          color={theme.colors.primary[5]}
          variant="outline"
          radius="xl"
        />

        <Flex direction="column" rowGap={3}>
          <Text size="sm">{name}</Text>
          <Text c={theme.colors.gray[6]} size="xs">
            {desc}
          </Text>
        </Flex>
      </Flex>
      <Divider my="md" />
    </Box>
  );
};

export default TaskItem;
