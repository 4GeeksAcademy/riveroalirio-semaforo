const Luz = ({ color, isSelected, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={isSelected ? `${className} brillo` : className}
    />
  );
};

export default Luz;