import { Task } from "@prisma/client";
import type { GetServerSideProps } from "next";
import { prisma } from "../lib/prisma";

type TasksProps = {
  tasks: Task;
};

const Home = ({ tasks }: TasksProps) => {
  return (
    <div>
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const tasks = await prisma.task.findMany({
    where: {
      title: {
        contains: "task",
      },
    },
  });

  const data = tasks.map((task) => {
    return {
      id: task.id,
      title: task.title,
      isDone: task.isDone,
      date: task.createdAt.toISOString(),
    };
  });

  return {
    props: {
      tasks: data,
    },
  };
};
