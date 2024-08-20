
var proximidade = 1 
var sentimentos = []
var faseAtual = 1
var checkpoint1 = false
var checkpoint2 = false
var checkpoint3 = false
var checkpoint4 = false
var checkpoint5 = false
var checkpoint6 = false
var checkpoint7 = false
var checkpoint8 = false
var checkpoint9 = false
var checkpoint10 = false


function iniciarJogo() {
    alert("Bem-vinda ao jogo de levantamento de peso, Yekta atualmente compete na categoria feminina de 81kg. Ela espera replicar seus sucessos nas categorias de base no nível sênior e está trabalhando duro para dar o seu melhor em Paris 2024. Seu objetivo é se qualificar para as Olimpíadas de 2024.")
    faseAtual = 1
    proximidade = 1 // Inicializa a proximidade no início do jogo
    executarFase(faseAtual)
}

function executarFase(fase) {
    while (proximidade > 0) {
        
    
        switch (fase) {
            case 1:
                fase1()
                break
            case 2:
                fase2()
                break
            case 3:
                fase3()
                break
            case 4:
                fase4()
                break
            case 5:
                fase5()
                break
            case 6:
                fase6()
                break
            case 7:
                fase7()
                break
            case 8:
                fase8()
                break
            case 9:
                fase9()
                break
            case 10:
                fase10()
                break
            default:
                alert("Você completou o jogo!")
                break
    }
        }
}

function fase1() {
    while (checkpoint1 == false){
        alert("Fase 1: A Chegada à Nova Academia\n\nVocê chegou à nova academia e está animada para começar seus treinos. No entanto, o ambiente é novo e intimidador. Você encontra Ahmed, um ex-atleta de levantamento de peso que agora atua como mentor para atletas refugiados.")

        let escolha = prompt("Como você deve iniciar sua jornada com a ajuda de Ahmed?\n1. Ignorar Ahmed e começar a treinar por conta própria.\n2. Apresentar-se a Ahmed, pedir conselhos sobre a academia e expressar seu entusiasmo.")

        if (escolha === "2") {
            alert("Bom trabalho! Você demonstrou abertura e proatividade ao buscar conselhos de Ahmed.")
            proximidade += 10 
            sentimentos.push("Abertura")
            faseAtual = 2
            executarFase(faseAtual)
            checkpoint01 = true
        } else {
            alert("Ignorar Ahmed pode resultar em falta de orientação valiosa. Tente novamente.")
            checkpoint1 = false 
        }
    }
}

function fase2() {
    while (checkpoint2 == false){
        alert("Fase 2: A Primeira Sessão de Treinamento\n\nDurante sua primeira sessão de treinamento, você percebe que alguns equipamentos estão em mau estado. Ahmed, que estava observando, pode ajudar a resolver a situação.")

        let escolha = prompt("Como você deve lidar com o problema do equipamento?\n1. Usar o equipamento sem procurar ajuda.\n2. Informar Ahmed sobre o problema e pedir para ele ajudar a resolver a situação.")

        if (escolha === "2") {
            alert("Ótimo! Você demonstrou responsabilidade ao informar Ahmed sobre o problema.")
            proximidade += 10 
            faseAtual = 3
            executarFase(faseAtual)
            checkpoint2 = true
        } else {
            alert("Usar equipamento problemático pode resultar em problemas de segurança. Tente novamente.")
            checkpoint2 = false
        }
    }
}

function fase3() {
    while (checkpoint3 == false) {
        alert("Fase 3: A Orientação de Ahmed\n\nAhmed oferece a você uma sessão de orientação para melhorar sua técnica e abordagem. Essa orientação pode ser crucial para seu sucesso futuro.")

        let escolha = prompt("Como você deve aproveitar a oportunidade para a orientação de Ahmed?\n1. Recusar a orientação e continuar com seu próprio método.\n2. Aceitar a orientação de Ahmed e aplicar as dicas fornecidas.")

        if (escolha === "2") {
            alert("Excelente escolha! Você demonstrou abertura para aprendizado.")
            proximidade += 10 
            sentimentos.push("Abertura para Aprendizado")
            faseAtual = 4
            executarFase(faseAtual)
            checkpoint3 = true
        } else {
        alert("Recusar a orientação pode resultar em menos progresso. Tente novamente.")
        checkpoint3 = false
    }
}
}

function fase4() {
    while (checkpoint4 == false ) {
        alert("Fase 4: Enfrentando um Rival\n\nDurante um evento local, você encontra um rival, Igor, que tenta desestabilizá-la com provocações. Ahmed sugere que você mantenha a calma e foque em seu desempenho.")

        let escolha = prompt("Qual é a melhor forma de lidar com as provocações de Igor?\n1. Envolver-se nas provocações e responder de forma agressiva.\n2. Seguir o conselho de Ahmed, ignorar as provocações e manter o foco no seu desempenho.")

        if (escolha === "2") {
            alert("Bom trabalho! Você demonstrou controle emocional.")
            proximidade += 10 
            faseAtual = 5
            executarFase(faseAtual)
            checkpoint4 = true; 
        } else {
            alert("Envolver-se nas provocações pode afetar seu desempenho. Tente novamente.")
            checkpoint4 = false
        }
           
    }
    
}

function fase5() {
    while (checkpoint5 == false){
        alert("Fase 5: O Evento de Beneficência\n\nVocê recebe um convite para um evento de beneficência organizado para arrecadar fundos e promover a integração de refugiados. Ahmed sugere que participar pode ser uma ótima oportunidade para visibilidade e apoio.")

        let escolha = prompt("Como você deve responder ao convite para o evento de beneficência?\n1. Participar do evento para apoiar a causa e aumentar sua visibilidade.\n2. Optar por não participar e concentrar-se apenas no treinamento.")

        if (escolha === "1") {
            alert("Ótimo! Você demonstrou solidariedade.")
            proximidade += 10 
            sentimentos.push("Solidariedade")
            faseAtual = 6
            executarFase(faseAtual)
            checkpoint5 = true
        } else {
            alert("Não participar pode resultar em menos visibilidade e oportunidades. Tente novamente.")
            checkpoint5 = false
        }
    }
}

function fase6() {
    while (checkpoint6 == false){
        alert("Fase 6: O Treinamento Intensivo\n\nAhmed apresenta um plano de treinamento intensivo que pode levar você a um novo nível de desempenho. Você deve decidir como gerenciar a carga de treinamento.")

        let escolha = prompt("Como você deve lidar com o plano de treinamento intensivo?\n1. Seguir o plano intensivo sem considerar o cansaço e sinais do corpo.\n2. Discutir com Ahmed sobre ajustar o plano conforme necessário e ouvir os sinais do seu corpo.")

        if (escolha === "2") {
            alert("Excelente escolha! Você demonstrou autocuidado.")
            proximidade += 10 
            faseAtual = 7
            executarFase(faseAtual)
            checkpoint6 = true
        } else {
            alert("Ignorar sinais de exaustão pode levar a lesões. Tente novamente.")
            checkpoint6 = false
        }
    }
}


function fase7() {
    while (checkpoint7 == false){
        alert("Fase 7: A Crise Pessoal\n\nVocê enfrenta uma crise pessoal que está afetando seu desempenho. Ahmed oferece apoio e técnicas para lidar com o estresse e superar a crise.")

        let escolha = prompt("Como você deve lidar com a crise pessoal?\n1. Ignorar a crise e continuar treinando sem fazer ajustes.\n2. Buscar apoio de Ahmed e usar suas técnicas para gerenciar o estresse.")

        if (escolha === "2") {
            alert("Ótimo! Você demonstrou resiliência ao buscar apoio e usar técnicas de gestão de estresse.")
            proximidade += 10
            faseAtual = 8
            executarFase(faseAtual)
            checkpoint7 = false 
        } else {
            alert("Ignorar a crise pode comprometer seu desempenho. Tente novamente.")
            checkpoint7 = false
        }
    }
}

function fase8() {
    while (checkpoint8 == false) {
        alert("Fase 8: O Evento de Treinamento Comunitário\n\nVocê é convidada para um evento de treinamento comunitário para apoiar atletas refugiados. Ahmed sugere que participar pode ser uma ótima oportunidade para criar laços com a comunidade.")

        let escolha = prompt("Como você deve aproveitar a oportunidade para o evento comunitário?\n1. Participar do evento e engajar com a comunidade.\n2. Optar por não participar e se concentrar apenas no treinamento.")
    
        if (escolha === "1") {
            alert("Ótimo! Você demonstrou envolvimento com a comunidade.")
            proximidade += 10 
            faseAtual = 9
            executarFase(faseAtual)
            checkpoint8 = true
        } else {
            alert("Não participar pode resultar em menos apoio. Tente novamente.")
            checkpoint8 = false
        }    
        
    }
    
}

function fase9() {
    while (checkpoint9 == false){
        alert("Fase 9: Preparação Final\n\nVocê está se preparando para o levantamento final que determinará se você se qualifica para as Olimpíadas. Ahmed revisa sua técnica e dá conselhos finais.")

        let escolha = prompt("Qual é a melhor forma de se preparar para o levantamento final?\n1. Seguir a orientação final sem questionar.\n2. Discutir qualquer ajuste necessário com Ahmed para garantir o melhor desempenho.")

        if (escolha === "2") {
            alert("Excelente! Você garantiu a melhor preparação possível.")
            proximidade += 10 
            faseAtual = 10
            executarFase(faseAtual)
            checkpoint9 = true
        } else {
            alert("Não discutir ajustes pode resultar em preparação inadequada. Tente novamente.")
            checkpoint9 = false
        }
    }
}
function fase10() {
    alert("Fase 10: O Grande Desafio\n\nFinalmente, você está no evento de levantamento que decide seu futuro. Acompanhe o desempenho final e veja se você conseguiu se qualificar para as Olimpíadas.")

    let sucesso = proximidade >= 90 

    if (sucesso) {
        alert("Parabéns! Você se qualificou para as Olimpíadas de 2024!")
    } else {
        alert("Infelizmente, você não conseguiu se qualificar para as Olimpíadas desta vez. Tente novamente!")
    }
}

window.onload = iniciarJogo
