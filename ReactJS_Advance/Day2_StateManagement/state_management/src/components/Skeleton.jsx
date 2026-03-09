export const SkeletonBox = ({ width, height, rounded = "rounded-md" }) => (
  <div className={`skeleton ${rounded}`} style={{ width, height }} />
);
