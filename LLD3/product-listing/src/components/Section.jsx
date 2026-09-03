function Section({ title, children }) {
  return (
    <div style={{ padding: "20px", marginBottom: "20px" }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Section;
