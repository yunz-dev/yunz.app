import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yunzdle',
  description: 'Better than Wordle',
};

export default function YunzdleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
