import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

type TooltipType = {
    anchorId: string;
    content: string;
    className?: string;
};

export const Tooltip = (props: TooltipType) => {
    const { anchorId, content, className } = props;

    return (
        <>
            <span id="discuss-on-twitter-tooltip" className={`info-icon ${className}`} data-tooltip-content={content} />
            <ReactTooltip anchorId={anchorId} className="!w-auto min-w-0  max-w-xs text-center !text-xs" clickable />
        </>
    );
};
