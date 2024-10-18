import { ReactNode } from 'react';
import TopBar from '@/components/TopBar';

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <TopBar />
      <main>{children}</main>
    </div>
  );
}
