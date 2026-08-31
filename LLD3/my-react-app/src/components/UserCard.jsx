function UserCard({ name, role }) {
  const isActive = true;
  const bio = "Loves building UIs with React";
  let statusMessage;
  if (isActive) {
    statusMessage = "✅ Active";
  } else {
    statusMessage = "❌ Inactive";
  }

  return (
    <div
      style={{
        border: " 1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "12px",
        maxWidth: "300px",
      }}
    >
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Status : {statusMessage}</p>

      {bio && <p>Bio: {bio}</p>}
    </div>
  );
}

export default UserCard;
