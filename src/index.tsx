import {createRoot} from 'react-dom/client';
import {Container} from './components/Container/Container';
import './global.scss';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);

root.render(<Container />);