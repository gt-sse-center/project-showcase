import { Button } from '@/components/ui/button';

interface FilterButtonProps {
  filter: string;
  activeFilter: string;
  onClick: () => void;
  children: React.ReactNode;
}

/**
 * A button which accepts an `onClick` function to
 * filterout content based on the button's value.
 */
function FilterButton({ filter, activeFilter, onClick, children }: FilterButtonProps) {
  const isActive = filter === activeFilter;

  return (
    <Button
      variant={isActive ? 'default' : 'outline'}
      className={`rounded-full ${
        isActive
          ? 'bg-[var(--gt-gold)] text-white hover:bg-[var(--gt-tech-light-gold)] hover:text-[var(--gt-info)]'
          : 'border-[var(--gt-gold)] text-[var(--gt-info)] hover:bg-[var(--gt-gold)] hover:text-white'
      }`}
      onClick={onClick}>
      {children}
    </Button>
  );
}

export { FilterButton };
