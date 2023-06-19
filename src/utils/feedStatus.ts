export const feedStatus = (status: string) => {
  switch (status) {
    case "done":
      return "Выполнено";
    case "created":
      return "Ожидает";
    case "pending":
      return "Готовится";
    default:
      return "Нет статуса";
  }
};
