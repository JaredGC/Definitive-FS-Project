const P = ({
  children,
  styleClasses,
  color = 'blue',
  align = 'left',
  type = 'normal',
  fontSize = 'sm',
}: any): JSX.Element => {
  const classesNames = `text-${color} text-${align} ${styleClasses} font-${type} text-${fontSize}`;

  return <p className={classesNames}>{children}</p>;
};

export default P;
