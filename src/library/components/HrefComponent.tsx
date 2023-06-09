export const HrefComponent = ({
  baseUrl,
  path,
}: {
  baseUrl: string;
  path: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        margin: "0",
        padding: "0",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        style={{
          minHeight: "24px",
          height: "24px",
          minWidth: "24px",
          width: "24px",
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
      <span
        style={{
          fontSize: 24,
          fontWeight: 500,
          padding: "0",
          margin: "0",
        }}
      >
        {`${baseUrl}/${path}`}
      </span>
    </div>
  );
};
