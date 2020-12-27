import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

interface TransitionProps {
  active: boolean;
  onEnter?: (element: HTMLElement) => void;
  className?: string;
}

export const Transition: FC<TransitionProps> = ({
  children,
  active,
  className,
  onEnter,
}) => (
  <CSSTransition
    in={active}
    unmountOnExit
    timeout={500}
    onEnter={onEnter}
    classNames={className ?? 'menu-secondary'}
  >
    <div className="menu">{children}</div>
  </CSSTransition>
);
