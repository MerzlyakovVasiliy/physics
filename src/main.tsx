import {createRoot} from 'react-dom/client';
import App from './app/App.tsx';
import './app/styles/index.scss';
import {StoreProvider} from "@/app/store/ui/StoreProvider.tsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </BrowserRouter>
);
