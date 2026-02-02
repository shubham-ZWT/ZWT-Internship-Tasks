import { useEffect, useRef, useState } from "react";

export default function LazyImage({ src }) {
  const imgRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
        //   console.log("Image visible:", src);
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      style={{
        width: "150px",
        height: "150px",
        background: "#eee",
      }}
    >
      {visible ? (
        <img
          src={src}
          alt="employee"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span>Loading image...</span>
      )}
    </div>
  );
}
