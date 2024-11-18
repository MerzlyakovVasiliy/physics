import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { EPostType } from '@/entities/Post';

interface TProps {
    value: EPostType;
    onChangeType: (type: EPostType) => void;
}

export const PostTypeTabs = memo((props: TProps) => {
    const { value, onChangeType } = props;

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: EPostType.ALL,
            content: 'Все статьи',
        },
        {
            value: EPostType.IT,
            content: 'Айти',
        },
        {
            value: EPostType.ECONOMICS,
            content: 'Экономика',
        },
        {
            value: EPostType.SCIENCE,
            content: 'Наука',
        },
    ], []);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as EPostType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        />
    );
});
