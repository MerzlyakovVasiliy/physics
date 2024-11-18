import { memo, ReactNode, useCallback } from 'react';
import { Tabs as MuiTabs, Tab } from '@mui/material';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const { tabs, onTabClick, value } = props;

    const clickHandle = useCallback((_event: React.SyntheticEvent, newValue: string) => {
        const clickedTab = tabs.find((tab) => tab.value === newValue);
        if (clickedTab) {
            onTabClick(clickedTab);
        }
    }, [onTabClick, tabs]);

    return (
        <MuiTabs
            value={value}
            onChange={clickHandle}
            variant="scrollable"
            scrollButtons="auto"
        >
            {tabs.map((tab) => (
                <Tab
                    label={tab.content}
                    value={tab.value}
                    key={tab.value}
                />
            ))}
        </MuiTabs>
    );
});
