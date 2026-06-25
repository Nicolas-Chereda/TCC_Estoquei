import Rotas from "./routes/Rotas.tsx";
import { UsuarioProvider } from "./contexts/UsuarioContexto.tsx";

const App = () => {
    return (
        <UsuarioProvider>
            <Rotas />
        </UsuarioProvider>
    );
};

export default App;
