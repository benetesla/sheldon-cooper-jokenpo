const pedra = 'pedra';
        const papel = 'papel';
        const tesoura = 'tesoura';
        const lagarto = 'lagarto';
        const spock = 'spock';
        function jokenpo(escolhaUsuario) {
            const opcoes = [pedra, papel, tesoura, lagarto, spock];
            const numeroAleatorio = Math.floor(Math.random() * 5);
            const escolhaComputador = opcoes[numeroAleatorio];
            let resultado;
            if (escolhaUsuario === escolhaComputador) {
                resultado = 'Empate';
            } else if (
                escolhaUsuario === pedra && escolhaComputador === tesoura ||
                escolhaUsuario === pedra && escolhaComputador === lagarto ||
                escolhaUsuario === papel && escolhaComputador === pedra ||
                escolhaUsuario === papel && escolhaComputador === spock ||
                escolhaUsuario === tesoura && escolhaComputador === papel ||
                escolhaUsuario === tesoura && escolhaComputador === lagarto ||
                escolhaUsuario === lagarto && escolhaComputador === papel ||
                escolhaUsuario === lagarto && escolhaComputador === spock ||
                escolhaUsuario === spock && escolhaComputador === pedra ||
                escolhaUsuario === spock && escolhaComputador === tesoura
            ) {
                resultado = 'Você ganhou';
            } else {
                resultado = 'Você perdeu';
            }
            document.getElementById('resultado').innerHTML = `
                <p>Sheldon: ${escolhaComputador}</p>
                <p>Voce: ${escolhaUsuario}</p>
                <p>${resultado}</p>
            `;
        }