type GenericButtonProps = {
  children: any;
  type: "button" | "submit" | "reset" | undefined;
};

export default function GenericButton({ children, type }: GenericButtonProps) {
  return <button type={type}>{children}</button>;
}
