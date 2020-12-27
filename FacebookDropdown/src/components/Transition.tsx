import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

interface TransitionProps {
  active: boolean;
  className?: string;
}

export const Transition: FC<TransitionProps> = ({
  children,
  active,
  className,
}) => (
  <CSSTransition
    in={active}
    unmountOnExit
    timeout={500}
    classNames={className ?? 'menu-secondary'}
  >
    <div className="menu">{children}</div>
  </CSSTransition>
);
