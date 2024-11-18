import { memo } from 'react';
import GridViewIcon from '@mui/icons-material/GridView'; // MUI icon for tiled view
import ListIcon from '@mui/icons-material/List'; // MUI icon for list view
import { Button } from '@mui/material'; // Ensure you import MUI Button
import { Box } from '@mui/material'; // Import Box for layout
import { EPostView } from '../../model/types/post';

interface PostViewSelectorProps {
    view: EPostView;
    onViewClick?: (view: EPostView) => void;
}

const viewTypes = [
    {
        view: EPostView.SMALL,
        icon: <GridViewIcon />, // Use MUI GridViewIcon for tiled view
    },
    {
        view: EPostView.BIG,
        icon: <ListIcon />, // Use MUI ListIcon for list view
    },
];

export const PostViewSelector = memo((props: PostViewSelectorProps) => {
    const { view, onViewClick } = props;

    const onClick = (newView: EPostView) => () => {
        onViewClick?.(newView);
    };

    return (
        <Box display="flex" gap={1}> {/* Use Box for layout */}
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    variant="text" // Use standard MUI button variant
                    onClick={onClick(viewType.view)}
                    color={viewType.view === view ? 'primary' : 'inherit'} // Highlight selected view
                >
                    {viewType.icon}
                </Button>
            ))}
        </Box>
    );
});
