# Roteiro de teste do LiraBot (Preview) — v2

Teste um bloco de cada vez, na ordem. Sempre observe: (1) qual intenção foi reconhecida (aparece em azul, tipo "Despedida recognized"), e (2) se o texto da resposta bate com o esperado.

## 1. Saudação e boas-vindas
- Reinicie a conversa (ícone de reload no Preview) → deve vir a mensagem de boas-vindas com "Vamos mudar sua trajetória junto com a Thay?" **e agora, no final dessa mesma mensagem, o aviso de responsabilidade.**
- Digite: `oi`
- Digite: `bom dia`
- **Esperado:** intenção `Saudacao`, resposta perguntando o que você precisa (sem repetir o aviso).

## 2. Fluxo de treino completo (objetivo + dias)
- Digite: `quero montar um treino`
- **Esperado:** intenção `Montar_Treino`, pergunta qual o objetivo.
- Digite: `hipertrofia`
- **Esperado:** intenção `Objetivo_Hipertrofia`, dicas de hipertrofia **sem** o aviso repetido, e no final pergunta quantos dias por semana você treina.
- Digite: `3 dias`
- **Esperado:** intenção `Dias_3`, resposta com a divisão **ABC** (peito/tríceps, costas/bíceps, pernas/ombro).
- Repita o fluxo completo trocando por: `emagrecimento` + `2 dias` (deve vir **AB**), `definição` + `4 dias` (deve vir **ABCD**), `condicionamento físico` + `5 dias` (deve vir **ABCDE**), e teste também `6 dias` (deve vir ABC-ABC).

## 3. Dieta e suplemento
- Digite: `quero montar uma dieta`
- **Esperado:** intenção `Montar_Dieta`, dicas gerais de alimentação **sem** o aviso repetido.
- Digite: `posso tomar whey?`
- **Esperado:** intenção `Duvida_Suplemento`, resposta sobre suplementos **sem** o aviso repetido.

## 4. Fluxo de dificuldades
- Digite: `estou com dificuldade`
- **Esperado:** intenção `Relatar_Dificuldade`, pergunta qual o tipo.
- Digite: `falta de tempo`
- **Esperado:** intenção `Dificuldade_Tempo`.
- Repita trocando por: `sem motivação`, `machuquei o joelho`, `falta de disciplina`, `sem dinheiro`, `não sei fazer o exercício` — cada uma na intenção correspondente (`Dificuldade_Motivacao`, `Dificuldade_Lesao`, `Dificuldade_Disciplina`, `Dificuldade_Financeiro`, `Dificuldade_Conhecimento`).
- **Atenção especial:** `Dificuldade_Lesao` é a única resposta de dificuldade que ainda deve trazer um aviso (pra procurar médico/fisioterapeuta) — confirme que ele aparece.

## 5. Outras intenções
- Digite: `quem é a thay?` → intenção `Historia_Thay`. **Confirme que menciona a graduação em Análise e Desenvolvimento de Sistemas.**
- Digite: `o que você faz?` → intenção `Ajuda_Geral`, com o menu de opções.
- Digite: `valeu, obrigado!` → intenção `Agradecimento`.
- Digite: `isso não me ajudou` → intenção `Feedback_Negativo`.
- Digite: `tchau` → intenção `Despedida`.

## 6. Teste de "confusão" (checar se não erra)
- No meio de qualquer fluxo, digite `oi` de novo → deve cair em `Saudacao`, não em `Despedida` nem "No matches".
- Digite algo fora do escopo, tipo `qual é a capital da frança` → deve cair em fallback ("I'm afraid I don't understand...").

## 7. Checagem geral do aviso único
- Percorra as principais respostas (treino, dieta, suplemento, dificuldades) e confirme que **o aviso de responsabilidade só aparece na mensagem de boas-vindas e na de lesão** — não deve aparecer repetido em toda resposta.

## 8. O que anotar se algo falhar
Pra cada erro, me manda:
- O texto exato que você digitou
- Qual intenção apareceu (ou se apareceu "No matches")
- Qual resposta veio

Com isso eu ajusto os exemplos de frases ou o texto da resposta e gero o JSON atualizado.
