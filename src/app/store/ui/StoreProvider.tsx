import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../config/store.ts';
import { StateSchema } from '../config/StateSchema.ts';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: Partial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createStore(
        initialState as StateSchema,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
