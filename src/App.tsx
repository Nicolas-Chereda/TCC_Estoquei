import Rotas from "./routes/Rotas.tsx";
import { AutenticacaoProvider } from "./contexts/AutenticacaoContexto.tsx";
import { ProdutoProvider } from "./contexts/ProdutosContexto.tsx";

const App = () => {
    return (
        <AutenticacaoProvider>
            <ProdutoProvider>
                <Rotas />
            </ProdutoProvider>
        </AutenticacaoProvider>
    );
};

export default App;
