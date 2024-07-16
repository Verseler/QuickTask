import {
  Container,
  Flex,
  Text,
  Box,
  Title,
  useMantineTheme,
} from "@mantine/core";
import SideBar from "../components/home/SideBar/SideBar";
import { IconCircleCheck } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

import TaskItem from "../components/home/TaskItem";
import AddTaskButton from "../components/home/AddTaskButton";
import { useState } from "react";
import TaskFullViewModal from "../components/home/TaskFullViewModal";

const Home = () => {
  const theme = useMantineTheme();
  const [tasks, setTasks] = useState(TASK_DATA);
  const taskCount = tasks?.length || 0;
  const [selectedTask, setSelectedTask] = useState(null);
  const [actionType, setActionType] = useState(null);
  //task full view modal  states
  const [opened, { open, close }] = useDisclosure(false);

  const onTaskClick = (task, actionType) => {
    setSelectedTask(task);
    setActionType(actionType);
    open();
  };

  const Header = (
    <Flex align={"center"} justify={"space-between"}>
      <Title size={26}>Today</Title>
      <AddTaskButton
        iconSize="xl"
        iconOnly
        onClick={() => onTaskClick({}, "add")}
      />
    </Flex>
  );

  const TaskCount = (
    <Flex align={"center"} gap={4} my={5}>
      <IconCircleCheck size={15} stroke={2} color={theme.colors.gray[6]} />
      <Text size="sm" c={theme.colors.gray[6]} aria-label="task count">
        {`${taskCount} ${taskCount <= 1 ? "task" : "tasks"}`}
      </Text>
    </Flex>
  );

  const Tasks = tasks.map((task) => (
    <TaskItem
      key={task.id}
      name={task.name}
      desc={task.desc}
      onClick={() => onTaskClick(task, "edit")}
    />
  ));

  return (
    <Flex>
      <SideBar addTaskOpen={() => onTaskClick({}, "add")} />

      <Container flex={1} p={60}>
        {Header}
        {TaskCount}

        <Box my={30}>
          {Tasks}
          <TaskFullViewModal
            opened={opened}
            close={close}
            selectedTask={selectedTask}
            actionType={actionType}
          />
        </Box>
      </Container>
    </Flex>
  );
};

export default Home;

const TASK_DATA = [
  {
    id: 1,
    name: "Take the productive method quiz",
    desc: "Get personalized recommendation from QuickTask",
    createdAt: "2022-01-01T12:34:56.789Z",
  },
  {
    id: 2,
    name: "Take the productive method quiz",
    desc: "Get personalized recommendation from QuickTask",
    createdAt: "2022-01-01T12:34:56.789Z",
  },
  {
    id: 3,
    name: "Create a new task list",
    desc: "Create a new task list and add some tasks",
    createdAt: "2022-01-01T12:34:56.789Z",
  },
  {
    id: 4,
    name: "Learn about the Pomodoro Technique",
    createdAt: "2022-01-01T12:34:56.789Z",
  },
  {
    id: 5,
    name: "Practice the Pomodoro Technique",
    desc: "Practice the Pomodoro Technique with a 25 minute timer",
    createdAt: "2022-01-01T12:34:56.789Z",
  },
  {
    id: 6,
    name: "Read an article about the Pomodoro Technique",
    desc: "Read an article about the Pomodoro Technique and learn more about it",
    createdAt: "2022-01-01T12:34:56.789Z",
  },
  {
    id: 7,
    name: "Watch a video about the Pomodoro Technique",
    desc: "Watch a video about the Pomodoro Technique and learn more about it",
    createdAt: "2022-01-01T12:34:56.789Z",
  },
];
