import { ReactNode } from 'react';

interface SheetProps {
  children: ReactNode;
}

export const Sheet = ({ children }: SheetProps) => (
  <div className="sheet">{children}</div>
);

export const SheetContent = ({ children }: SheetProps) => (
  <div className="sheet-content">{children}</div>
);

export const SheetHeader = ({ children }: SheetProps) => (
  <div className="sheet-header">{children}</div>
);

export const SheetTitle = ({ children }: SheetProps) => (
  <h2 className="sheet-title">{children}</h2>
);

export const SheetTrigger = ({ children }: SheetProps) => (
  <button className="sheet-trigger">{children}</button>
); 