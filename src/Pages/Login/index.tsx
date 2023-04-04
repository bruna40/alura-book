export function Login() {
    return (
       <form>
            <label>
                Email:
                <input type="text" placeholder="user@login.com" />
            </label>
            <label>
                Senha:
                <input type="password" placeholder="********" />
            </label>
            <button type="button">Entrar</button>
            <button type="button">Registro</button>
       </form>
        
    )
}