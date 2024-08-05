import React, { FC } from "react";

export type MessageProps = {
  message: string;
};

export const Message: FC<MessageProps> = ({ message }) => {
  return <div>{message}</div>;
};
