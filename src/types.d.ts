import {Prisma} from "@prisma/client";

const taskData = Prisma.validator<Prisma.TaskDefaultArgs>()({
  select: {name: true, description: true, icon: true, status: true},
});

type TaskData = Prisma.TaskGetPayload<typeof taskData>;

type BoardWithTasks = Prisma.BoardGetPayload<{
  include: {
    tasks: true;
  };
}>;
