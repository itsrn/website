import { FC, ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  tooltip?: string;
  className?: string;
}

const ToolTip: FC<Props> = ({ children, tooltip, className }): JSX.Element => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={container}
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current || !container.current) return;
        const { right } = container.current.getBoundingClientRect();

        tooltipRef.current.style.left = clientX - right + "px";
      }}
      className="group relative inline-block"
    >
      {children}
      {tooltip ? (
        <span
          ref={tooltipRef}
          className={`invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-[#403F3E] text-[#F2F2F2] p-1 rounded absolute top-full mt-2 whitespace-nowrap ${className}`}
        >
          {tooltip}
        </span>
      ) : null}
    </div>
  );
};

export default ToolTip;
