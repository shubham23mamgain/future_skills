// eslint-disable-next-line react/prop-types
export default function GridContainer({ children, className }) {
  return (
    <div
      className={
        "grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 " + className
      }
    >
      {children}
    </div>
  );
}
