import { Box, Text, useMantineTheme } from "@mantine/core";
import {
  IconSearch,
  IconCalendar,
  IconCalendarMonth,
  IconHash,
} from "@tabler/icons-react";

import Header from "./Header";
import ListItem from "./ListItem";
import AddTaskButton from "../AddTaskButton";

const SideBar = ({ addTaskOpen }) => {
  const theme = useMantineTheme();

  return (
    <Box w={280} h="100vh" p={"sm"} bg={theme.colors.secondary[0]}>
      <Header />
      <AddTaskButton onClick={addTaskOpen} />
      <ListItem label="Search" icon={<IconSearch stroke={1} size={22} />} />
      <ListItem label="Today" icon={<IconCalendar stroke={1} size={22} />} />
      <ListItem
        label="Upcoming"
        icon={<IconCalendarMonth stroke={1} size={22} />}
      />
      <Box my={26}>
        <Text size="sm" mb={8} fw={500} c={theme.colors.gray[7]}>
          My Projects
        </Text>

        <ListItem label="All" icon={<IconHash stroke={1} size={18} />} />
      </Box>
    </Box>
  );
};

export default SideBar;
