import dayjs from "dayjs";

export const getDaysAgo = (createdAt: string) => {
  const createdDate = dayjs(createdAt);
  const today = dayjs();
  const daysAgo = today.diff(createdDate, "day");

  const dayWord = daysAgo === 1 ? "day" : "days";
  return `${daysAgo} ${dayWord} ago`;
};
