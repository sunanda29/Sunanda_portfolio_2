export default function PermissionGate({
  hasPermission,
  setHasPermission
}) {
  return (
    <section className="permission-section">

      <h2>Project Portfolio</h2>

      <p>
        Detailed company and project information
        is intentionally hidden.
      </p>

      <button
        className="permission-btn"
        onClick={() =>
          setHasPermission(!hasPermission)
        }
      >
        {hasPermission
          ? "Hide Details"
          : "View Project Details"}
      </button>

    </section>
  );
}
``
