import React from "react";

interface CardProps {
  title: string;
  content?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

interface CardContainerProps {
  children: React.ReactNode;
  className: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  className,
  children,
  ...rest
}) => {
  return (
    <CardContainer
      className={`p-4 w-full h-[148px] bg-sky-600 rounded-2xl text-left ${className}`}
      {...rest}
    >
      <h3>{title}</h3>
      {content && <p>{content}</p>}
      {children && children}
    </CardContainer>
  );
};

const CardContainer: React.FC<CardContainerProps> = ({
  children,
  onClick,
  className,
}) => {
  if (!onClick) {
    return <article className={className}>{children}</article>;
  }

  return (
    <button className={className} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Card;
