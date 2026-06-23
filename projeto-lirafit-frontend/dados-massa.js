const dadosMassa = {
    masculino: {
        '3x': {
            divisaoNome: 'Full Body A/B — Alternado 3x por semana',
            iniciante: [
                {
                    titulo: 'Treino A — Empurrar + Quadríceps',
                    exercicios: [
                        { nome: 'Agachamento Livre', series: '3 × 12 rep', descricao: 'Pés na largura dos ombros, desça até 90°, joelhos não passam a ponta dos pés.' },
                        { nome: 'Supino com Halteres', series: '3 × 12 rep', descricao: 'Deitado, empurra os halteres para cima em linha reta. Foco no peitoral.' },
                        { nome: 'Desenvolvimento com Halteres', series: '3 × 12 rep', descricao: 'Sentado, empurra acima da cabeça. Foco nos ombros.' },
                        { nome: 'Tríceps Corda', series: '3 × 15 rep', descricao: 'Cotovelos fixos ao lado do corpo, estende os braços para baixo completamente.' },
                    ]
                },
                {
                    titulo: 'Treino B — Puxar + Posterior',
                    exercicios: [
                        { nome: 'Levantamento Terra Romeno', series: '3 × 12 rep', descricao: 'Costas retas, desce a barra pela perna até sentir o alongamento no posterior.' },
                        { nome: 'Remada Curvada', series: '3 × 12 rep', descricao: 'Torso inclinado a 45°, puxe a barra até o abdômen. Foco nas costas.' },
                        { nome: 'Puxada na Polia', series: '3 × 12 rep', descricao: 'Puxe a barra até o peito, cotovelos apontados para baixo e para trás.' },
                        { nome: 'Rosca Direta', series: '3 × 12 rep', descricao: 'Cotovelos fixos ao lado do corpo, sobe o halter até o ombro com controle.' },
                    ]
                }
            ],
            intermediario: [
                {
                    titulo: 'Treino A — Empurrar + Quadríceps',
                    exercicios: [
                        { nome: 'Agachamento com Barra', series: '4 × 10 rep', descricao: 'Barra nos trapézios, desça controlado até 90°, sobe expirando.' },
                        { nome: 'Supino Inclinado com Barra', series: '4 × 10 rep', descricao: 'Banco a 45°, foca na parte superior do peitoral.' },
                        { nome: 'Desenvolvimento Militar', series: '4 × 10 rep', descricao: 'Barra na frente, empurra acima da cabeça. Foco nos ombros.' },
                        { nome: 'Tríceps Francês', series: '3 × 12 rep', descricao: 'Deitado, desce o halter atrás da cabeça e estende completamente.' },
                        { nome: 'Leg Press', series: '3 × 15 rep', descricao: 'Pés na largura dos ombros, desça controlado sem travar os joelhos.' },
                    ]
                },
                {
                    titulo: 'Treino B — Puxar + Posterior',
                    exercicios: [
                        { nome: 'Levantamento Terra', series: '4 × 8 rep', descricao: 'Coluna neutra, quadril empurra para frente ao subir. O mais completo para força.' },
                        { nome: 'Barra Fixa', series: '4 × 8 rep', descricao: 'Pegada pronada, sobe o queixo acima da barra. Amplitude total.' },
                        { nome: 'Remada com Halteres', series: '4 × 10 rep', descricao: 'Apoiado no banco, puxe o halter até o quadril com amplitude máxima.' },
                        { nome: 'Rosca Scott', series: '3 × 12 rep', descricao: 'Apoio no banco Scott isola completamente o bíceps.' },
                    ]
                }
            ],
            avancado: [
                {
                    titulo: 'Treino A — Força: Empurrar',
                    exercicios: [
                        { nome: 'Agachamento com Barra', series: '5 × 5 rep', descricao: 'Carga pesada, foco em força máxima. Profundidade total.' },
                        { nome: 'Supino Reto com Barra', series: '5 × 5 rep', descricao: 'Carga máxima, desça controlado até o peito.' },
                        { nome: 'Desenvolvimento Militar', series: '4 × 6 rep', descricao: 'Barra na frente, explosão no movimento.' },
                        { nome: 'Tríceps com Correntes', series: '4 × 8 rep', descricao: 'Correntes aumentam a resistência conforme você estende o braço.' },
                    ]
                },
                {
                    titulo: 'Treino B — Força: Puxar',
                    exercicios: [
                        { nome: 'Levantamento Terra', series: '5 × 5 rep', descricao: 'Carga máxima. O exercício mais completo para força total.' },
                        { nome: 'Barra Fixa com Peso', series: '4 × 6 rep', descricao: 'Colete ou halter preso aos pés para aumentar a resistência.' },
                        { nome: 'Remada com Barra', series: '4 × 8 rep', descricao: 'Carga pesada, explosão na puxada até o abdômen.' },
                        { nome: 'Rosca com Barra', series: '4 × 8 rep', descricao: 'Movimento completo, cotovelos fixos ao lado do corpo.' },
                    ]
                }
            ]
        },
        '4x': {
            divisaoNome: 'Upper/Lower — 4x por semana',
            iniciante: [
                {
                    titulo: 'Upper A — Segunda: Peito e Costas',
                    exercicios: [
                        { nome: 'Supino com Halteres', series: '3 × 12 rep', descricao: 'Foco no peitoral, amplitude completa.' },
                        { nome: 'Remada Curvada', series: '3 × 12 rep', descricao: 'Torso inclinado, puxe até o abdômen.' },
                        { nome: 'Crucifixo com Halteres', series: '3 × 15 rep', descricao: 'Abre os braços lateralmente deitado, foco no peitoral.' },
                        { nome: 'Puxada na Polia', series: '3 × 12 rep', descricao: 'Puxe até o peito, cotovelos apontados para baixo.' },
                    ]
                },
                {
                    titulo: 'Lower A — Terça: Pernas',
                    exercicios: [
                        { nome: 'Agachamento Livre', series: '3 × 12 rep', descricao: 'Pés na largura dos ombros, desça até 90°.' },
                        { nome: 'Leg Press', series: '3 × 15 rep', descricao: 'Pés na plataforma, desça controlado sem travar os joelhos.' },
                        { nome: 'Cadeira Extensora', series: '3 × 15 rep', descricao: 'Estende completamente a perna, foco no quadríceps.' },
                        { nome: 'Panturrilha em Pé', series: '4 × 20 rep', descricao: 'Sobe na ponta do pé com controle e pausa no topo.' },
                    ]
                },
                {
                    titulo: 'Upper B — Quinta: Ombros e Braços',
                    exercicios: [
                        { nome: 'Desenvolvimento com Halteres', series: '3 × 12 rep', descricao: 'Sentado, empurra acima da cabeça. Foco nos ombros.' },
                        { nome: 'Elevação Lateral', series: '3 × 15 rep', descricao: 'Braços levantam lateralmente até a altura do ombro.' },
                        { nome: 'Rosca Direta', series: '3 × 12 rep', descricao: 'Cotovelos fixos, sobe o halter com controle.' },
                        { nome: 'Tríceps Corda', series: '3 × 15 rep', descricao: 'Cotovelos fixos, estende completamente.' },
                    ]
                },
                {
                    titulo: 'Lower B — Sexta: Posterior e Core',
                    exercicios: [
                        { nome: 'Stiff com Halteres', series: '3 × 12 rep', descricao: 'Costas retas, desce os halteres pela perna alongando o posterior.' },
                        { nome: 'Cadeira Flexora', series: '3 × 15 rep', descricao: 'Foco no bíceps femoral, movimento controlado.' },
                        { nome: 'Agachamento Sumô', series: '3 × 12 rep', descricao: 'Pés bem afastados, pontas dos pés viradas para fora.' },
                        { nome: 'Abdominal Reto', series: '3 × 20 rep', descricao: 'Movimento curto e controlado, não force o pescoço.' },
                    ]
                }
            ],
            intermediario: [
                {
                    titulo: 'Upper A — Segunda: Peito e Costas',
                    exercicios: [
                        { nome: 'Supino Reto com Barra', series: '4 × 10 rep', descricao: 'Carga moderada-pesada, amplitude total.' },
                        { nome: 'Puxada Pegada Aberta', series: '4 × 10 rep', descricao: 'Puxe até o peito, cotovelos bem abertos.' },
                        { nome: 'Supino Inclinado com Halteres', series: '3 × 12 rep', descricao: 'Banco a 45°, foca na parte superior do peitoral.' },
                        { nome: 'Remada Unilateral', series: '3 × 12 rep', descricao: 'Apoiado no banco, amplitude máxima.' },
                    ]
                },
                {
                    titulo: 'Lower A — Terça: Quadríceps',
                    exercicios: [
                        { nome: 'Agachamento com Barra', series: '4 × 10 rep', descricao: 'Barra nos trapézios, desça controlado.' },
                        { nome: 'Leg Press 45°', series: '4 × 12 rep', descricao: 'Pés na largura dos ombros, amplitude total.' },
                        { nome: 'Cadeira Extensora', series: '4 × 15 rep', descricao: 'Foco total no quadríceps.' },
                        { nome: 'Afundo com Halteres', series: '3 × 12 rep', descricao: 'Passo à frente, joelho traseiro quase no chão.' },
                    ]
                },
                {
                    titulo: 'Upper B — Quinta: Ombros e Braços',
                    exercicios: [
                        { nome: 'Desenvolvimento Militar', series: '4 × 10 rep', descricao: 'Barra na frente, explosão no movimento.' },
                        { nome: 'Elevação Lateral com Cabos', series: '3 × 15 rep', descricao: 'Tensão constante no deltóide lateral.' },
                        { nome: 'Rosca Scott', series: '4 × 10 rep', descricao: 'Isola completamente o bíceps.' },
                        { nome: 'Tríceps Francês', series: '4 × 10 rep', descricao: 'Deitado, desce o halter atrás da cabeça.' },
                    ]
                },
                {
                    titulo: 'Lower B — Sexta: Posterior e Glúteo',
                    exercicios: [
                        { nome: 'Levantamento Terra Romeno', series: '4 × 10 rep', descricao: 'Costas retas, máximo alongamento do posterior.' },
                        { nome: 'Cadeira Flexora', series: '4 × 12 rep', descricao: 'Foco total no bíceps femoral.' },
                        { nome: 'Agachamento Búlgaro', series: '3 × 10 rep', descricao: 'Pé traseiro elevado, foco no glúteo e quadríceps.' },
                        { nome: 'Panturrilha Sentado', series: '4 × 20 rep', descricao: 'Foca no sóleo, movimento lento e controlado.' },
                    ]
                }
            ],
            avancado: [
                {
                    titulo: 'Upper A — Segunda: Peito e Costas (Força)',
                    exercicios: [
                        { nome: 'Supino Reto com Barra', series: '5 × 5 rep', descricao: 'Carga máxima, foco em força.' },
                        { nome: 'Levantamento Terra', series: '5 × 5 rep', descricao: 'Carga máxima, técnica impecável.' },
                        { nome: 'Supino Inclinado com Barra', series: '4 × 8 rep', descricao: 'Carga pesada, amplitude total.' },
                        { nome: 'Barra Fixa com Peso', series: '4 × 8 rep', descricao: 'Colete ou halter preso para aumentar a resistência.' },
                    ]
                },
                {
                    titulo: 'Lower A — Terça: Pernas (Força)',
                    exercicios: [
                        { nome: 'Agachamento com Barra', series: '5 × 5 rep', descricao: 'Carga máxima, profundidade total.' },
                        { nome: 'Leg Press com Correntes', series: '4 × 8 rep', descricao: 'Resistência crescente na fase concêntrica.' },
                        { nome: 'Agachamento Búlgaro', series: '4 × 8 rep', descricao: 'Carga pesada com halteres.' },
                        { nome: 'Panturrilha Explosiva', series: '5 × 15 rep', descricao: 'Sobe rápido, desce controlado.' },
                    ]
                },
                {
                    titulo: 'Upper B — Quinta: Ombros e Braços (Volume)',
                    exercicios: [
                        { nome: 'Desenvolvimento com Barra', series: '5 × 5 rep', descricao: 'Carga máxima, foco em força nos ombros.' },
                        { nome: 'Rosca com Barra', series: '4 × 8 rep', descricao: 'Carga pesada, cotovelos fixos.' },
                        { nome: 'Tríceps com Correntes', series: '4 × 8 rep', descricao: 'Resistência crescente no movimento.' },
                        { nome: 'Elevação Frontal com Barra', series: '3 × 12 rep', descricao: 'Foco no deltóide anterior.' },
                    ]
                },
                {
                    titulo: 'Lower B — Sexta: Posterior (Volume)',
                    exercicios: [
                        { nome: 'Levantamento Terra Romeno com Barra', series: '5 × 8 rep', descricao: 'Carga pesada, máxima amplitude.' },
                        { nome: 'Agachamento Hack', series: '4 × 10 rep', descricao: 'Foco total no quadríceps.' },
                        { nome: 'Cadeira Flexora', series: '4 × 12 rep', descricao: 'Série longa, foco em controle.' },
                        { nome: 'Panturrilha com Carga Máxima', series: '5 × 20 rep', descricao: 'Amplitude total, pausa no fundo.' },
                    ]
                }
            ]
        },
        '5x': {
            divisaoNome: 'Push/Pull/Legs — 5x por semana',
            iniciante: [
                {
                    titulo: 'Push — Segunda: Peito, Ombros e Tríceps',
                    exercicios: [
                        { nome: 'Supino com Halteres', series: '3 × 12 rep', descricao: 'Foco no peitoral, amplitude completa.' },
                        { nome: 'Desenvolvimento com Halteres', series: '3 × 12 rep', descricao: 'Sentado, empurra acima da cabeça.' },
                        { nome: 'Tríceps Corda', series: '3 × 15 rep', descricao: 'Cotovelos fixos, estende completamente.' },
                        { nome: 'Elevação Lateral', series: '3 × 15 rep', descricao: 'Braços até a altura do ombro.' },
                    ]
                },
                {
                    titulo: 'Pull — Terça: Costas e Bíceps',
                    exercicios: [
                        { nome: 'Puxada na Polia', series: '3 × 12 rep', descricao: 'Puxe até o peito, cotovelos para baixo.' },
                        { nome: 'Remada Curvada', series: '3 × 12 rep', descricao: 'Torso inclinado, puxe até o abdômen.' },
                        { nome: 'Rosca Direta', series: '3 × 12 rep', descricao: 'Cotovelos fixos, amplitude total.' },
                        { nome: 'Rosca Martelo', series: '3 × 12 rep', descricao: 'Pegada neutra, foco no braquial.' },
                    ]
                },
                {
                    titulo: 'Legs — Quarta: Pernas',
                    exercicios: [
                        { nome: 'Agachamento Livre', series: '3 × 12 rep', descricao: 'Pés na largura dos ombros, desça até 90°.' },
                        { nome: 'Leg Press', series: '3 × 15 rep', descricao: 'Amplitude total, sem travar os joelhos.' },
                        { nome: 'Cadeira Extensora', series: '3 × 15 rep', descricao: 'Foco no quadríceps.' },
                        { nome: 'Panturrilha em Pé', series: '4 × 20 rep', descricao: 'Amplitude total, pausa no topo.' },
                    ]
                },
                {
                    titulo: 'Push — Quinta: Peito, Ombros e Tríceps',
                    exercicios: [
                        { nome: 'Supino Inclinado com Halteres', series: '3 × 12 rep', descricao: 'Banco a 45°, parte superior do peitoral.' },
                        { nome: 'Crucifixo com Halteres', series: '3 × 15 rep', descricao: 'Amplitude máxima, foco no peitoral.' },
                        { nome: 'Elevação Frontal', series: '3 × 15 rep', descricao: 'Deltóide anterior, movimento controlado.' },
                        { nome: 'Tríceps Francês', series: '3 × 12 rep', descricao: 'Deitado, desce atrás da cabeça.' },
                    ]
                },
                {
                    titulo: 'Pull — Sexta: Costas e Bíceps',
                    exercicios: [
                        { nome: 'Remada com Halteres', series: '3 × 12 rep', descricao: 'Apoiado no banco, amplitude máxima.' },
                        { nome: 'Puxada Pegada Fechada', series: '3 × 12 rep', descricao: 'Pegada supinada, foco na parte baixa das costas.' },
                        { nome: 'Rosca Scott', series: '3 × 12 rep', descricao: 'Isola o bíceps completamente.' },
                        { nome: 'Rosca Concentrada', series: '3 × 12 rep', descricao: 'Foco máximo no bíceps.' },
                    ]
                }
            ],
            intermediario: [
                {
                    titulo: 'Push — Segunda: Peito, Ombros e Tríceps',
                    exercicios: [
                        { nome: 'Supino Reto com Barra', series: '4 × 10 rep', descricao: 'Carga moderada-pesada.' },
                        { nome: 'Desenvolvimento Militar', series: '4 × 10 rep', descricao: 'Barra na frente, explosão no movimento.' },
                        { nome: 'Crucifixo com Cabos', series: '3 × 12 rep', descricao: 'Tensão constante no peitoral.' },
                        { nome: 'Tríceps Pulley', series: '4 × 12 rep', descricao: 'Extensão completa, cotovelos fixos.' },
                    ]
                },
                {
                    titulo: 'Pull — Terça: Costas e Bíceps',
                    exercicios: [
                        { nome: 'Barra Fixa', series: '4 × 8 rep', descricao: 'Queixo acima da barra, amplitude total.' },
                        { nome: 'Remada com Barra', series: '4 × 10 rep', descricao: 'Costas retas, puxe até o abdômen.' },
                        { nome: 'Rosca com Barra', series: '4 × 10 rep', descricao: 'Amplitude total, cotovelos fixos.' },
                        { nome: 'Rosca Martelo', series: '3 × 12 rep', descricao: 'Foco no braquial e braquiorradial.' },
                    ]
                },
                {
                    titulo: 'Legs — Quarta: Pernas',
                    exercicios: [
                        { nome: 'Agachamento com Barra', series: '4 × 10 rep', descricao: 'Barra nos trapézios, profundidade total.' },
                        { nome: 'Levantamento Terra Romeno', series: '4 × 10 rep', descricao: 'Foco no posterior e glúteo.' },
                        { nome: 'Leg Press 45°', series: '4 × 12 rep', descricao: 'Amplitude total.' },
                        { nome: 'Afundo com Halteres', series: '3 × 12 rep', descricao: 'Alternado, passo longo.' },
                    ]
                },
                {
                    titulo: 'Push — Quinta: Peito, Ombros e Tríceps',
                    exercicios: [
                        { nome: 'Supino Inclinado com Barra', series: '4 × 10 rep', descricao: 'Parte superior do peitoral.' },
                        { nome: 'Elevação Lateral com Cabos', series: '4 × 15 rep', descricao: 'Tensão constante no deltóide.' },
                        { nome: 'Tríceps Francês com Barra', series: '4 × 10 rep', descricao: 'Carga pesada, amplitude total.' },
                        { nome: 'Supino Fechado', series: '3 × 12 rep', descricao: 'Foco máximo no tríceps.' },
                    ]
                },
                {
                    titulo: 'Pull — Sexta: Costas e Bíceps',
                    exercicios: [
                        { nome: 'Puxada Pegada Supinada', series: '4 × 10 rep', descricao: 'Foco na parte baixa das costas e bíceps.' },
                        { nome: 'Remada Unilateral', series: '4 × 10 rep', descricao: 'Apoiado no banco, amplitude máxima.' },
                        { nome: 'Rosca Scott', series: '4 × 10 rep', descricao: 'Isolamento total do bíceps.' },
                        { nome: 'Rosca Concentrada', series: '3 × 12 rep', descricao: 'Pico máximo de contração.' },
                    ]
                }
            ],
            avancado: [
                {
                    titulo: 'Push — Segunda: Peito, Ombros e Tríceps (Força)',
                    exercicios: [
                        { nome: 'Supino Reto com Barra', series: '5 × 5 rep', descricao: 'Carga máxima.' },
                        { nome: 'Desenvolvimento com Barra', series: '5 × 5 rep', descricao: 'Carga máxima, foco em força.' },
                        { nome: 'Supino com Correntes', series: '4 × 8 rep', descricao: 'Resistência crescente na extensão.' },
                        { nome: 'Tríceps com Correntes', series: '4 × 8 rep', descricao: 'Tensão crescente no movimento.' },
                    ]
                },
                {
                    titulo: 'Pull — Terça: Costas e Bíceps (Força)',
                    exercicios: [
                        { nome: 'Barra Fixa com Peso', series: '5 × 5 rep', descricao: 'Colete ou halter preso.' },
                        { nome: 'Levantamento Terra', series: '5 × 5 rep', descricao: 'Carga máxima, técnica impecável.' },
                        { nome: 'Remada com Barra', series: '4 × 8 rep', descricao: 'Carga pesada, explosão na puxada.' },
                        { nome: 'Rosca com Barra', series: '4 × 8 rep', descricao: 'Carga pesada, cotovelos fixos.' },
                    ]
                },
                {
                    titulo: 'Legs — Quarta: Pernas (Força)',
                    exercicios: [
                        { nome: 'Agachamento com Barra', series: '5 × 5 rep', descricao: 'Carga máxima, profundidade total.' },
                        { nome: 'Agachamento Búlgaro', series: '4 × 8 rep', descricao: 'Carga pesada, pé traseiro elevado.' },
                        { nome: 'Leg Press com Correntes', series: '4 × 10 rep', descricao: 'Resistência crescente.' },
                        { nome: 'Panturrilha com Carga Máxima', series: '5 × 15 rep', descricao: 'Amplitude total.' },
                    ]
                },
                {
                    titulo: 'Push — Quinta: Peito, Ombros e Tríceps (Volume)',
                    exercicios: [
                        { nome: 'Supino Inclinado com Barra', series: '5 × 8 rep', descricao: 'Volume alto, peitoral superior.' },
                        { nome: 'Crucifixo com Cabos', series: '4 × 15 rep', descricao: 'Tensão constante e máxima amplitude.' },
                        { nome: 'Elevação Lateral Mio-Rep', series: '3 × 20 rep', descricao: 'Volume máximo no deltóide lateral.' },
                        { nome: 'Tríceps Pulley Drop Set', series: '4 × 12 rep', descricao: 'Reduza o peso e continue sem pausa no final.' },
                    ]
                },
                {
                    titulo: 'Pull — Sexta: Costas e Bíceps (Volume)',
                    exercicios: [
                        { nome: 'Puxada + Remada Superserie', series: '4 × 10+10 rep', descricao: 'Sem descanso entre os dois exercícios.' },
                        { nome: 'Remada Unilateral', series: '4 × 10 rep', descricao: 'Carga pesada, amplitude máxima.' },
                        { nome: 'Rosca com Barra + Martelo Superserie', series: '4 × 10+10 rep', descricao: 'Sem descanso entre os dois.' },
                        { nome: 'Rosca Spider', series: '3 × 15 rep', descricao: 'Pico de contração máximo no bíceps.' },
                    ]
                }
            ]
        }
    },
    feminino: {
        '3x': {
            divisaoNome: 'Full Body com foco em Glúteos — 3x por semana',
            iniciante: [
                {
                    titulo: 'Treino A — Segunda: Glúteo e Peito',
                    exercicios: [
                        { nome: 'Elevação Pélvica com Peso', series: '3 × 15 rep', descricao: 'Deitada, costas no chão, eleva o quadril contraindo o glúteo.' },
                        { nome: 'Agachamento Livre', series: '3 × 15 rep', descricao: 'Pés na largura dos ombros, foco em descer bem.' },
                        { nome: 'Supino com Halteres', series: '3 × 12 rep', descricao: 'Amplitude completa, foco no peitoral.' },
                        { nome: 'Abdução no Cabo', series: '3 × 20 rep', descricao: 'Eleva a perna lateralmente, foco no glúteo médio.' },
                    ]
                },
                {
                    titulo: 'Treino B — Quarta: Costas e Ombros',
                    exercicios: [
                        { nome: 'Remada com Halteres', series: '3 × 12 rep', descricao: 'Apoiada no banco, puxe até o quadril.' },
                        { nome: 'Puxada na Polia', series: '3 × 12 rep', descricao: 'Puxe até o peito, cotovelos para baixo.' },
                        { nome: 'Desenvolvimento com Halteres', series: '3 × 12 rep', descricao: 'Sentada, empurra acima da cabeça.' },
                        { nome: 'Elevação Lateral', series: '3 × 15 rep', descricao: 'Braços até a altura do ombro.' },
                    ]
                },
                {
                    titulo: 'Treino C — Sexta: Pernas e Braços',
                    exercicios: [
                        { nome: 'Leg Press', series: '3 × 15 rep', descricao: 'Amplitude total, sem travar os joelhos.' },
                        { nome: 'Stiff com Halteres', series: '3 × 12 rep', descricao: 'Costas retas, alonga o posterior.' },
                        { nome: 'Rosca Direta', series: '3 × 12 rep', descricao: 'Cotovelos fixos, amplitude total.' },
                        { nome: 'Tríceps Corda', series: '3 × 15 rep', descricao: 'Cotovelos fixos, estende completamente.' },
                    ]
                }
            ],
            intermediario: [
                {
                    titulo: 'Treino A — Segunda: Glúteo e Peito',
                    exercicios: [
                        { nome: 'Hip Thrust com Barra', series: '4 × 15 rep', descricao: 'Costas no banco, quadril sobe com força. Glúteo máximo.' },
                        { nome: 'Agachamento com Barra', series: '4 × 12 rep', descricao: 'Barra nos trapézios, profundidade total.' },
                        { nome: 'Supino Inclinado com Halteres', series: '3 × 12 rep', descricao: 'Banco a 45°, peitoral superior.' },
                        { nome: 'Extensão de Quadril no Cabo', series: '4 × 15 rep', descricao: 'Em pé, chuta a perna para trás com controle.' },
                    ]
                },
                {
                    titulo: 'Treino B — Quarta: Costas e Ombros',
                    exercicios: [
                        { nome: 'Puxada Pegada Fechada', series: '4 × 10 rep', descricao: 'Foco na parte baixa das costas.' },
                        { nome: 'Remada com Barra', series: '4 × 10 rep', descricao: 'Torso inclinado, puxe até o abdômen.' },
                        { nome: 'Desenvolvimento Militar', series: '4 × 10 rep', descricao: 'Barra na frente, foco nos ombros.' },
                        { nome: 'Elevação Lateral com Cabos', series: '3 × 15 rep', descricao: 'Tensão constante no deltóide.' },
                    ]
                },
                {
                    titulo: 'Treino C — Sexta: Pernas e Braços',
                    exercicios: [
                        { nome: 'Agachamento Sumô com Halter', series: '4 × 12 rep', descricao: 'Pés bem afastados, foco no glúteo e interno da coxa.' },
                        { nome: 'Cadeira Flexora', series: '4 × 15 rep', descricao: 'Bíceps femoral, movimento controlado.' },
                        { nome: 'Rosca Scott', series: '3 × 12 rep', descricao: 'Isola o bíceps completamente.' },
                        { nome: 'Tríceps Francês', series: '3 × 12 rep', descricao: 'Deitada, desce o halter atrás da cabeça.' },
                    ]
                }
            ],
            avancado: [
                {
                    titulo: 'Treino A — Segunda: Glúteo e Peito (Força)',
                    exercicios: [
                        { nome: 'Hip Thrust com Barra', series: '5 × 12 rep', descricao: 'Carga máxima, explosão no quadril.' },
                        { nome: 'Agachamento com Barra', series: '5 × 8 rep', descricao: 'Carga pesada, profundidade total.' },
                        { nome: 'Supino Reto com Barra', series: '4 × 8 rep', descricao: 'Carga pesada, amplitude total.' },
                        { nome: 'Extensão de Quadril com Caneleira Pesada', series: '4 × 20 rep', descricao: 'Foco no glúteo, volume alto.' },
                    ]
                },
                {
                    titulo: 'Treino B — Quarta: Costas e Ombros',
                    exercicios: [
                        { nome: 'Barra Fixa', series: '4 × 8 rep', descricao: 'Queixo acima da barra, amplitude total.' },
                        { nome: 'Levantamento Terra Romeno', series: '4 × 10 rep', descricao: 'Carga pesada, máximo alongamento.' },
                        { nome: 'Desenvolvimento com Barra', series: '4 × 8 rep', descricao: 'Carga pesada, foco em força.' },
                        { nome: 'Elevação Lateral Mio-Rep', series: '3 × 20 rep', descricao: 'Volume máximo no deltóide.' },
                    ]
                },
                {
                    titulo: 'Treino C — Sexta: Pernas e Braços',
                    exercicios: [
                        { nome: 'Leg Press com Carga Máxima', series: '5 × 10 rep', descricao: 'Volume e intensidade altos.' },
                        { nome: 'Agachamento Búlgaro', series: '4 × 10 rep', descricao: 'Carga pesada, pé traseiro elevado.' },
                        { nome: 'Rosca com Barra', series: '4 × 8 rep', descricao: 'Carga pesada, cotovelos fixos.' },
                        { nome: 'Tríceps com Correntes', series: '4 × 8 rep', descricao: 'Resistência crescente.' },
                    ]
                }
            ]
        },
        '4x': {
            divisaoNome: 'Lower/Upper com foco em Glúteos — 4x por semana',
            iniciante: [
                {
                    titulo: 'Lower A — Segunda: Glúteo',
                    exercicios: [
                        { nome: 'Elevação Pélvica com Peso', series: '4 × 15 rep', descricao: 'Deitada no chão, eleva o quadril com controle.' },
                        { nome: 'Agachamento Sumô com Halter', series: '3 × 15 rep', descricao: 'Pés bem afastados, foco no glúteo.' },
                        { nome: 'Abdução na Máquina', series: '4 × 20 rep', descricao: 'Abre as pernas com controle, glúteo médio.' },
                        { nome: 'Extensão de Quadril no Cabo', series: '3 × 15 rep', descricao: 'Em pé, chuta a perna para trás.' },
                    ]
                },
                {
                    titulo: 'Upper — Terça: Costas e Ombros',
                    exercicios: [
                        { nome: 'Remada com Halteres', series: '3 × 12 rep', descricao: 'Apoiada no banco, foco nas costas.' },
                        { nome: 'Puxada na Polia', series: '3 × 12 rep', descricao: 'Puxe até o peito, cotovelos para baixo.' },
                        { nome: 'Desenvolvimento com Halteres', series: '3 × 12 rep', descricao: 'Sentada, empurra acima da cabeça.' },
                        { nome: 'Elevação Lateral', series: '3 × 15 rep', descricao: 'Amplitude controlada até o ombro.' },
                    ]
                },
                {
                    titulo: 'Lower B — Quinta: Quadríceps',
                    exercicios: [
                        { nome: 'Agachamento Livre', series: '3 × 15 rep', descricao: 'Pés na largura dos ombros, 90°.' },
                        { nome: 'Leg Press', series: '3 × 15 rep', descricao: 'Amplitude total, foco no quadríceps.' },
                        { nome: 'Cadeira Extensora', series: '3 × 15 rep', descricao: 'Extensão completa da perna.' },
                        { nome: 'Afundo com Halteres', series: '3 × 12 rep', descricao: 'Passo à frente, joelho quase no chão.' },
                    ]
                },
                {
                    titulo: 'Full Body — Sexta: Corpo Todo',
                    exercicios: [
                        { nome: 'Stiff com Halteres', series: '3 × 12 rep', descricao: 'Alonga o posterior e glúteo.' },
                        { nome: 'Supino com Halteres', series: '3 × 12 rep', descricao: 'Amplitude completa, peitoral.' },
                        { nome: 'Rosca Direta', series: '3 × 12 rep', descricao: 'Cotovelos fixos, bíceps.' },
                        { nome: 'Tríceps Corda', series: '3 × 15 rep', descricao: 'Extensão completa.' },
                    ]
                }
            ],
            intermediario: [
                {
                    titulo: 'Lower A — Segunda: Glúteo e Posterior',
                    exercicios: [
                        { nome: 'Hip Thrust com Barra', series: '4 × 15 rep', descricao: 'Costas no banco, carga no quadril.' },
                        { nome: 'Stiff com Barra', series: '4 × 10 rep', descricao: 'Costas retas, máximo alongamento.' },
                        { nome: 'Abdução com Caneleira no Cabo', series: '4 × 20 rep', descricao: 'Glúteo médio, movimento controlado.' },
                        { nome: 'Cadeira Flexora', series: '3 × 15 rep', descricao: 'Bíceps femoral.' },
                    ]
                },
                {
                    titulo: 'Upper — Terça: Costas e Ombros',
                    exercicios: [
                        { nome: 'Puxada Pegada Fechada', series: '4 × 10 rep', descricao: 'Foco na parte baixa das costas.' },
                        { nome: 'Remada com Barra', series: '4 × 10 rep', descricao: 'Torso a 45°, puxe até o abdômen.' },
                        { nome: 'Desenvolvimento Militar', series: '3 × 10 rep', descricao: 'Barra na frente, foco nos ombros.' },
                        { nome: 'Elevação Lateral com Cabos', series: '3 × 15 rep', descricao: 'Tensão constante.' },
                    ]
                },
                {
                    titulo: 'Lower B — Quinta: Quadríceps e Glúteo',
                    exercicios: [
                        { nome: 'Agachamento com Barra', series: '4 × 12 rep', descricao: 'Barra nos trapézios, profundidade total.' },
                        { nome: 'Leg Press', series: '4 × 15 rep', descricao: 'Amplitude total.' },
                        { nome: 'Agachamento Búlgaro', series: '3 × 12 rep', descricao: 'Pé traseiro elevado, glúteo e quadríceps.' },
                        { nome: 'Panturrilha Sentada', series: '4 × 20 rep', descricao: 'Foco no sóleo.' },
                    ]
                },
                {
                    titulo: 'Full Body — Sexta: Braços e Core',
                    exercicios: [
                        { nome: 'Supino Inclinado com Halteres', series: '3 × 12 rep', descricao: 'Peitoral superior.' },
                        { nome: 'Rosca Scott', series: '3 × 12 rep', descricao: 'Isolamento total do bíceps.' },
                        { nome: 'Tríceps Francês', series: '3 × 12 rep', descricao: 'Amplitude completa.' },
                        { nome: 'Prancha Abdominal', series: '3 × 45 seg', descricao: 'Core, corpo reto do calcanhar à cabeça.' },
                    ]
                }
            ],
            avancado: [
                {
                    titulo: 'Lower A — Segunda: Glúteo (Força)',
                    exercicios: [
                        { nome: 'Hip Thrust com Barra', series: '5 × 12 rep', descricao: 'Carga máxima, explosão.' },
                        { nome: 'Levantamento Terra Romeno', series: '4 × 8 rep', descricao: 'Carga pesada, máximo alongamento.' },
                        { nome: 'Agachamento Sumô com Barra', series: '4 × 10 rep', descricao: 'Carga pesada, glúteo e interno da coxa.' },
                        { nome: 'Extensão de Quadril com Caneleira Pesada', series: '4 × 20 rep', descricao: 'Volume alto no glúteo.' },
                    ]
                },
                {
                    titulo: 'Upper — Terça: Costas e Ombros (Força)',
                    exercicios: [
                        { nome: 'Barra Fixa', series: '4 × 8 rep', descricao: 'Queixo acima da barra, amplitude total.' },
                        { nome: 'Levantamento Terra', series: '4 × 6 rep', descricao: 'Carga máxima, técnica impecável.' },
                        { nome: 'Desenvolvimento com Barra', series: '4 × 8 rep', descricao: 'Carga pesada.' },
                        { nome: 'Elevação Lateral Mio-Rep', series: '3 × 20 rep', descricao: 'Volume máximo.' },
                    ]
                },
                {
                    titulo: 'Lower B — Quinta: Quadríceps (Força)',
                    exercicios: [
                        { nome: 'Agachamento com Barra', series: '5 × 8 rep', descricao: 'Carga pesada, profundidade total.' },
                        { nome: 'Leg Press com Carga Máxima', series: '4 × 10 rep', descricao: 'Volume e intensidade.' },
                        { nome: 'Agachamento Búlgaro', series: '4 × 8 rep', descricao: 'Carga pesada.' },
                        { nome: 'Panturrilha com Carga Máxima', series: '5 × 15 rep', descricao: 'Amplitude total.' },
                    ]
                },
                {
                    titulo: 'Full Body — Sexta: Corpo Todo (Volume)',
                    exercicios: [
                        { nome: 'Supino com Barra', series: '4 × 8 rep', descricao: 'Carga pesada.' },
                        { nome: 'Hip Thrust com Barra', series: '4 × 15 rep', descricao: 'Volume extra no glúteo.' },
                        { nome: 'Rosca com Barra', series: '4 × 8 rep', descricao: 'Carga pesada.' },
                        { nome: 'Prancha + Elevação de Quadril', series: '3 × 20 rep', descricao: 'Core e glúteo simultâneos.' },
                    ]
                }
            ]
        },
        '5x': {
            divisaoNome: 'Glúteo / Costas / Peito+Ombros / Quadríceps / Glúteo+Core — 5x por semana',
            iniciante: [
                {
                    titulo: 'Dia 1 — Segunda: Glúteo e Posterior',
                    exercicios: [
                        { nome: 'Elevação Pélvica', series: '4 × 15 rep', descricao: 'Deitada no chão, eleva o quadril.' },
                        { nome: 'Stiff com Halteres', series: '3 × 12 rep', descricao: 'Alonga o posterior e glúteo.' },
                        { nome: 'Extensão de Quadril no Cabo', series: '3 × 15 rep', descricao: 'Chuta a perna para trás.' },
                        { nome: 'Cadeira Flexora', series: '3 × 15 rep', descricao: 'Bíceps femoral.' },
                    ]
                },
                {
                    titulo: 'Dia 2 — Terça: Costas e Bíceps',
                    exercicios: [
                        { nome: 'Remada com Halteres', series: '3 × 12 rep', descricao: 'Apoiada no banco, foco nas costas.' },
                        { nome: 'Puxada na Polia', series: '3 × 12 rep', descricao: 'Puxe até o peito, cotovelos para baixo.' },
                        { nome: 'Rosca Direta', series: '3 × 12 rep', descricao: 'Cotovelos fixos, amplitude total.' },
                        { nome: 'Rosca Martelo', series: '3 × 12 rep', descricao: 'Pegada neutra, braquial.' },
                    ]
                },
                {
                    titulo: 'Dia 3 — Quarta: Peito, Tríceps e Ombros',
                    exercicios: [
                        { nome: 'Supino com Halteres', series: '3 × 12 rep', descricao: 'Amplitude completa, peitoral.' },
                        { nome: 'Desenvolvimento com Halteres', series: '3 × 12 rep', descricao: 'Sentada, empurra acima da cabeça.' },
                        { nome: 'Tríceps Corda', series: '3 × 15 rep', descricao: 'Extensão completa.' },
                        { nome: 'Elevação Lateral', series: '3 × 15 rep', descricao: 'Amplitude até o ombro.' },
                    ]
                },
                {
                    titulo: 'Dia 4 — Quinta: Quadríceps e Panturrilha',
                    exercicios: [
                        { nome: 'Agachamento Livre', series: '3 × 15 rep', descricao: 'Profundidade total, foco no quadríceps.' },
                        { nome: 'Leg Press', series: '3 × 15 rep', descricao: 'Amplitude total.' },
                        { nome: 'Cadeira Extensora', series: '3 × 15 rep', descricao: 'Quadríceps isolado.' },
                        { nome: 'Panturrilha em Pé', series: '4 × 20 rep', descricao: 'Amplitude total, pausa no topo.' },
                    ]
                },
                {
                    titulo: 'Dia 5 — Sexta: Glúteo e Core',
                    exercicios: [
                        { nome: 'Agachamento Sumô com Halter', series: '4 × 15 rep', descricao: 'Pés bem afastados, glúteo e interno da coxa.' },
                        { nome: 'Abdução na Máquina', series: '4 × 20 rep', descricao: 'Glúteo médio.' },
                        { nome: 'Abdominal Reto', series: '3 × 20 rep', descricao: 'Movimento curto e controlado.' },
                        { nome: 'Prancha Abdominal', series: '3 × 30 seg', descricao: 'Corpo reto, abdômen contraído.' },
                    ]
                }
            ],
            intermediario: [
                {
                    titulo: 'Dia 1 — Segunda: Glúteo e Posterior',
                    exercicios: [
                        { nome: 'Hip Thrust com Barra', series: '4 × 15 rep', descricao: 'Costas no banco, explosão no quadril.' },
                        { nome: 'Stiff com Barra', series: '4 × 10 rep', descricao: 'Máximo alongamento, costas retas.' },
                        { nome: 'Extensão de Quadril com Caneleira', series: '4 × 15 rep', descricao: 'Em pé, glúteo máximo.' },
                        { nome: 'Cadeira Flexora', series: '4 × 15 rep', descricao: 'Bíceps femoral.' },
                    ]
                },
                {
                    titulo: 'Dia 2 — Terça: Costas e Bíceps',
                    exercicios: [
                        { nome: 'Puxada Pegada Fechada', series: '4 × 10 rep', descricao: 'Foco na parte baixa das costas.' },
                        { nome: 'Remada com Barra', series: '4 × 10 rep', descricao: 'Torso a 45°, puxe até o abdômen.' },
                        { nome: 'Rosca Scott', series: '4 × 12 rep', descricao: 'Isolamento do bíceps.' },
                        { nome: 'Rosca Concentrada', series: '3 × 12 rep', descricao: 'Pico de contração máximo.' },
                    ]
                },
                {
                    titulo: 'Dia 3 — Quarta: Peito, Tríceps e Ombros',
                    exercicios: [
                        { nome: 'Supino Inclinado com Halteres', series: '4 × 10 rep', descricao: 'Banco a 45°, peitoral superior.' },
                        { nome: 'Desenvolvimento Militar', series: '4 × 10 rep', descricao: 'Barra na frente, foco nos ombros.' },
                        { nome: 'Tríceps Francês', series: '4 × 10 rep', descricao: 'Amplitude completa.' },
                        { nome: 'Elevação Lateral com Cabos', series: '3 × 15 rep', descricao: 'Tensão constante.' },
                    ]
                },
                {
                    titulo: 'Dia 4 — Quinta: Quadríceps e Panturrilha',
                    exercicios: [
                        { nome: 'Agachamento com Barra', series: '4 × 12 rep', descricao: 'Profundidade total.' },
                        { nome: 'Leg Press 45°', series: '4 × 15 rep', descricao: 'Amplitude total.' },
                        { nome: 'Afundo com Halteres', series: '3 × 12 rep', descricao: 'Alternado, passo longo.' },
                        { nome: 'Panturrilha Sentada', series: '4 × 20 rep', descricao: 'Sóleo, movimento lento.' },
                    ]
                },
                {
                    titulo: 'Dia 5 — Sexta: Glúteo e Core',
                    exercicios: [
                        { nome: 'Agachamento Búlgaro', series: '4 × 12 rep', descricao: 'Pé traseiro elevado, glúteo.' },
                        { nome: 'Abdução com Caneleira no Cabo', series: '4 × 20 rep', descricao: 'Glúteo médio, volume alto.' },
                        { nome: 'Prancha Lateral', series: '3 × 30 seg cada lado', descricao: 'Core lateral, quadril não cai.' },
                        { nome: 'Abdominal com Rotação', series: '3 × 20 rep', descricao: 'Foco no oblíquo.' },
                    ]
                }
            ],
            avancado: [
                {
                    titulo: 'Dia 1 — Segunda: Glúteo e Posterior (Força)',
                    exercicios: [
                        { nome: 'Hip Thrust com Barra', series: '5 × 12 rep', descricao: 'Carga máxima, explosão total.' },
                        { nome: 'Levantamento Terra Romeno', series: '4 × 8 rep', descricao: 'Carga pesada, máximo alongamento.' },
                        { nome: 'Agachamento Sumô com Barra', series: '4 × 10 rep', descricao: 'Carga pesada, glúteo e interno.' },
                        { nome: 'Cadeira Flexora Unilateral', series: '4 × 15 rep', descricao: 'Isolamento do bíceps femoral.' },
                    ]
                },
                {
                    titulo: 'Dia 2 — Terça: Costas e Bíceps (Força)',
                    exercicios: [
                        { nome: 'Barra Fixa', series: '4 × 8 rep', descricao: 'Queixo acima da barra.' },
                        { nome: 'Levantamento Terra', series: '4 × 6 rep', descricao: 'Carga máxima, técnica impecável.' },
                        { nome: 'Remada Unilateral com Halter', series: '4 × 10 rep', descricao: 'Amplitude máxima.' },
                        { nome: 'Rosca com Barra', series: '4 × 8 rep', descricao: 'Carga pesada, cotovelos fixos.' },
                    ]
                },
                {
                    titulo: 'Dia 3 — Quarta: Peito, Tríceps e Ombros (Força)',
                    exercicios: [
                        { nome: 'Supino Reto com Barra', series: '4 × 8 rep', descricao: 'Carga pesada, amplitude total.' },
                        { nome: 'Desenvolvimento com Barra', series: '4 × 8 rep', descricao: 'Carga pesada, foco em força.' },
                        { nome: 'Tríceps com Correntes', series: '4 × 8 rep', descricao: 'Resistência crescente.' },
                        { nome: 'Elevação Lateral Mio-Rep', series: '3 × 20 rep', descricao: 'Volume máximo.' },
                    ]
                },
                {
                    titulo: 'Dia 4 — Quinta: Quadríceps (Força)',
                    exercicios: [
                        { nome: 'Agachamento com Barra', series: '5 × 8 rep', descricao: 'Carga máxima, profundidade total.' },
                        { nome: 'Leg Press com Carga Máxima', series: '4 × 10 rep', descricao: 'Volume e intensidade.' },
                        { nome: 'Agachamento Búlgaro', series: '4 × 8 rep', descricao: 'Carga pesada.' },
                        { nome: 'Panturrilha Explosiva', series: '5 × 15 rep', descricao: 'Sobe rápido, desce controlado.' },
                    ]
                },
                {
                    titulo: 'Dia 5 — Sexta: Glúteo e Core (Volume)',
                    exercicios: [
                        { nome: 'Hip Thrust com Barra', series: '4 × 15 rep', descricao: 'Volume extra no glúteo.' },
                        { nome: 'Abdução com Caneleira Pesada', series: '4 × 25 rep', descricao: 'Glúteo médio, volume máximo.' },
                        { nome: 'Prancha + Elevação de Quadril', series: '3 × 20 rep', descricao: 'Core e glúteo simultâneos.' },
                        { nome: 'Abdominal com Peso', series: '3 × 20 rep', descricao: 'Carga extra no abdômen.' },
                    ]
                }
            ]
        }
    }
};
