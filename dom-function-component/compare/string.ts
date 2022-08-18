export const getCardComponent = (title: string, content: string): string => {
  const string = `<div class="card">
    <div class="card-header">${title}</div>
    <div class="card-body">${content}</div>
  </div>`;
  return string;
};
