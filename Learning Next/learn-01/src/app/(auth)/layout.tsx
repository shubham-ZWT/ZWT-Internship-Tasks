import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div><p><Link href="/">Back</Link></p></div>
      {children}
    </div>
  );
}
