import Rotas from "./routes/Rotas.tsx";
import { AutenticacaoProvider } from "./contexts/AutenticacaoContexto.tsx";

const App = () => {
    return (
        <AutenticacaoProvider>
                <Rotas />
        </AutenticacaoProvider>
    );
};

export default App;
